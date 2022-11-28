import { AppState } from "../../../reducers/AppContext";
import { Button, Modal } from "react-bootstrap";
import ActionButtons from "./ActionButtons";

export default function ModalHeader() {

    const {
        selectedTemplate, setSelectedTemplate,
    } = AppState();

    const handleOnPreviewClose = () => setSelectedTemplate(null);

    return (
        <Modal.Header
            style={{
                borderColor: 'transparent',
            }}
        >
            <table style={{ width: '100%' }} className='modal-preview-options mx-5'>
                <tbody>
                    <tr>
                        <td style={{ width: '65%' }}>
                            <h3
                                id="contained-modal-title-vcenter"
                                className='mb-0'
                            >
                                {selectedTemplate?.name}
                            </h3>
                        </td>
                        {
                            ActionButtons().map((item, index) => {
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
                                            size='md'
                                        >
                                            {item.name}
                                        </Button>
                                    </td>
                                )
                            })
                        }
                        <td>
                            <button
                                type="button"
                                className="btn-close btn-close-white px-2 align-middle"
                                data-bs-dismiss="modal" aria-label="Close"
                                onClick={handleOnPreviewClose}
                                size='md'
                            ></button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </Modal.Header>
    );
}