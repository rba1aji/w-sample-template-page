import { AppState } from "../../../reducers/AppContext";
import { Modal, Button } from "react-bootstrap";
import { useEffect } from "react";
import '../../../styles/ModalPreview.css';

export default function ModalPreview() {
    const {
        selectedTemplate, setSelectedTemplate,
        setSelectedView, selectedView
    } = AppState();

    const handleOnPreviewClose = () => {
        setSelectedTemplate(null);
        console.log(selectedTemplate, "closed");
    }
    const handleOnDownload = () => {
        fetch(selectedTemplate[selectedView], {
            method: "GET",
            headers: {}
        })
            .then(response => {
                response.arrayBuffer().then(function (buffer) {
                    const url = window.URL.createObjectURL(new Blob([buffer]));
                    const link = document.createElement("a");
                    link.href = url;
                    link.setAttribute("download", `${selectedTemplate[selectedView]}.png`); //or any other extension
                    document.body.appendChild(link);
                    link.click();
                });
            })
            .catch(err => {
                console.log(err);
            });
    }

    useEffect(() => {
        console.log(selectedView, "selectedView");
        console.log(selectedTemplate[selectedView], "selectedTemplate");
    }, [selectedView]);

    return (
        <>
            <Modal
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={selectedTemplate}
                onHide={handleOnPreviewClose}
            >
                <div
                    className='modal-preview'
                >
                    <Modal.Header
                        style={{ borderColor: 'transparent' }}
                        className='pb-0'
                    >
                        <table style={{ width: '100%' }} className='modal-preview-options'>
                            <tbody>
                                <tr>
                                    <td style={{ width: '55%' }}>
                                        <h3
                                            id="contained-modal-title-vcenter"
                                            className='mb-0'
                                        >
                                            {selectedTemplate?.name}
                                        </h3>
                                    </td>
                                    {
                                        [
                                            {
                                                name: 'Desktop',
                                                clickEvent: () => setSelectedView('desktop'),
                                                active: selectedView === 'desktop'
                                            },
                                            {
                                                name: 'Mobile',
                                                clickEvent: () => setSelectedView('mobile'),
                                                active: selectedView === 'mobile'
                                            },
                                            {
                                                name: 'Free download',
                                                clickEvent: handleOnDownload,
                                                active: false
                                            }
                                        ]
                                            .map((item, index) => {
                                                return (
                                                    <td
                                                        key={index}
                                                        style={{
                                                            textAlign: 'center',
                                                        }}
                                                    >
                                                        <Button
                                                            variant='outline-light'
                                                            onClick={item.clickEvent}
                                                            style={{
                                                                backgroundColor: item.active ? "white" : "transparent",
                                                                color: item.active ? "black" : "white",
                                                                borderRadius: '15px',
                                                            }}
                                                        >
                                                            {item.name}
                                                        </Button>
                                                    </td>
                                                )
                                            })
                                    }
                                    <td>
                                        <button type="button" className="btn-close btn-close-white px-2 align-middle"
                                            data-bs-dismiss="modal" aria-label="Close"
                                            onClick={handleOnPreviewClose}
                                        ></button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </Modal.Header>
                    <Modal.Body>
                        <img
                            src={selectedTemplate[selectedView]}
                            alt={selectedTemplate?.name}
                            style={{
                                display: 'block',
                                margin: 'auto',
                                width: '100%',
                            }}
                            className='img-fluid'
                        />
                    </Modal.Body>
                </div>
            </Modal>
        </>
    )
}