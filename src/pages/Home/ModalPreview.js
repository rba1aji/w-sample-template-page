import { AppState } from "../../reducers/AppContext";
import { Modal, Button } from "react-bootstrap";
import logo from '../../logo.svg';

export default function ModalPreview() {
    const { selectedImage, setSelectedImage } = AppState();

    const handleOnPreviewClose = () => {
        setSelectedImage(null);
        console.log(selectedImage, "closed");
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
                            Modal heading
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <image
                            src={selectedImage?.image_url}
                            alt={selectedImage?.name}
                            style={{
                                display: 'block',
                                margin: 'auto',
                                width: '500px',
                                height: '500px',
                            }}
                        />
                        wef
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={handleOnPreviewClose}>Close</Button>
                    </Modal.Footer>
                </div>
            </Modal>
        </>
    )
}