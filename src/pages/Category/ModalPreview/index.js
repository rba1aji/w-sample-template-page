import { AppState } from "../../../reducers/AppContext";
import { Modal, Button } from "react-bootstrap";
import { useEffect } from "react";

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
                className='modal-preview'
            >
                <div
                    style={{
                        backgroundColor: 'black',
                        border: '1px solid grey',
                        borderRadius: '15px',
                    }}
                >
                    <Modal.Header
                        style={{ borderColor: 'transparent' }}
                    >
                        <table style={{ width: '100%' }}>
                            <tbody>
                                <tr>
                                    <td style={{ width: '50%' }}>
                                        <Modal.Title id="contained-modal-title-vcenter">
                                            {selectedTemplate?.name}
                                        </Modal.Title>
                                    </td>
                                    <td
                                        style={{
                                            textAlign: 'center',
                                        }}
                                    >
                                        <Button
                                            variant='outline-light'
                                            onClick={() => setSelectedView('desktop')}
                                        >
                                            Desktop
                                        </Button>
                                    </td>

                                    <td
                                        style={{
                                            textAlign: 'right',
                                        }}
                                    >
                                        <Button
                                            variant='outline-light'
                                            onClick={() => setSelectedView('mobile')}
                                        >
                                            Mobile
                                        </Button>
                                    </td>


                                    <td
                                        style={{
                                            textAlign: 'right',
                                        }}
                                    >
                                        <Button
                                            variant='outline-light'
                                            onClick={handleOnDownload}
                                        >
                                            Free download
                                        </Button>
                                    </td>
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