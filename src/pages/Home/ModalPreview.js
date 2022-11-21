import { AppState } from "../../reducers/AppContext";
import { Modal, Button } from "react-bootstrap";

export default function ModalPreview() {
    const { selectedImage, setSelectedImage } = AppState();

    const handleOnPreviewClose = () => {
        setSelectedImage(null);
        console.log(selectedImage, "closed");
    }
    const handleOnDownload = () => {
        fetch(selectedImage.image_url, {
            method: "GET",
            headers: {}
        })
            .then(response => {
                response.arrayBuffer().then(function (buffer) {
                    const url = window.URL.createObjectURL(new Blob([buffer]));
                    const link = document.createElement("a");
                    link.href = url;
                    link.setAttribute("download", `${selectedImage.image_url}.png`); //or any other extension
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
                show={selectedImage}
                onHide={handleOnPreviewClose}
                className='modal-preview'
            >
                <div
                    style={{ backgroundColor: 'black', border: '2px solid grey' }}
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            {selectedImage?.name}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <img
                            src={selectedImage?.image_url}
                            alt={selectedImage?.name}
                            style={{
                                display: 'block',
                                margin: 'auto',
                                // width: '500px',
                                // height: '450px',
                                // visibility: 'visible',
                                // opacity: '1',
                                // outline:'1px solid grey'
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