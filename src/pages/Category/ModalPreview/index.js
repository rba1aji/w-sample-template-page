import { AppState } from "../../../reducers/AppContext";
import { Modal, Button } from "react-bootstrap";

export default function ModalPreview() {
    const { selectedTemplate, setSelectedTemplate } = AppState();

    const handleOnPreviewClose = () => {
        setSelectedTemplate(null);
        console.log(selectedTemplate, "closed");
    }
    const handleOnDownload = () => {
        fetch(selectedTemplate.image_url, {
            method: "GET",
            headers: {}
        })
            .then(response => {
                response.arrayBuffer().then(function (buffer) {
                    const url = window.URL.createObjectURL(new Blob([buffer]));
                    const link = document.createElement("a");
                    link.href = url;
                    link.setAttribute("download", `${selectedTemplate.image_url}.png`); //or any other extension
                    document.body.appendChild(link);
                    link.click();
                });
            })
            .catch(err => {
                console.log(err);
            });
    }

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
                    style={{ backgroundColor: 'black', border: '2px solid grey' }}
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            {selectedTemplate?.name}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <img
                            src={selectedTemplate?.image_url}
                            alt={selectedTemplate?.name}
                            style={{
                                display: 'block',
                                margin: 'auto',
                            }}
                            className='img-fluid'
                        />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={handleOnDownload}>Download</Button>
                        <Button onClick={handleOnPreviewClose}>Close</Button>
                    </Modal.Footer>
                </div>
            </Modal>
        </>
    )
}