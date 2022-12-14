import { AppState } from "../../../reducers/AppContext";
import { Modal } from "react-bootstrap";
import '../../../styles/ModalPreview.css';
import ModalHeader from "./ModalHeader";
import Template from "./Template";

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
                    style={{
                        overflow: 'hidden',
                    }}
                >
                    <ModalHeader />
                    <Modal.Body
                        style={{
                            height: '87vh',
                            overflowY: 'scroll',
                            overflowX: 'hidden',
                        }}
                        className='pb-5'
                    >
                        {
                            selectedTemplate[selectedView] ?
                                <Template />
                                :
                                <h3 className='text-center pt-5 mt-5 fw-normal'>No Preview Available</h3>
                        }
                    </Modal.Body>
                </div>
            </Modal>
        </>
    )
}