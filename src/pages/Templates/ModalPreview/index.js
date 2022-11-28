import { AppState } from "../../../reducers/AppContext";
import { Modal } from "react-bootstrap";
import '../../../styles/ModalPreview.css';
import ModalHeader from "./ModalHeader";

export default function ModalPreview() {
    const {
        selectedTemplate, setSelectedTemplate,
        selectedView
    } = AppState();

    const handleOnPreviewClose = () => setSelectedTemplate(null);

    return (
        <>
            <Modal
                centered
                show={selectedTemplate}
                onHide={handleOnPreviewClose}
                fullscreen={true}
                style={{
                    paddingTop: '5vh',
                }}
            >
                <div
                    className='modal-preview px-5'
                >
                    <ModalHeader />
                    <Modal.Body
                        style={{
                            height: '87vh',
                            overflow: 'scroll',
                        }}
                    >
                        {
                            selectedTemplate[selectedView] ?
                                <img
                                    src={selectedTemplate[selectedView]}
                                    alt={selectedTemplate?.name}
                                    style={{
                                        display: 'block',
                                        margin: 'auto',
                                        width: selectedView === 'mobile' ? '35%' : '90%',
                                    }}
                                    className='img-fluid py-1'
                                />
                                :
                                <h3 className='text-center pt-5 mt-5 fw-normal'>No Preview Available</h3>
                        }
                    </Modal.Body>
                </div>
            </Modal>
        </>
    )
}