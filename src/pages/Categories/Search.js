import { InputGroup, Form } from "react-bootstrap";

export default function Search() {
    return (
        <>
            <InputGroup size='sm'>
                <Form.Control
                    className='bg-transparent '
                    placeholder=""
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    style={{ borderRightColor: 'transparent' }}
                />
                <InputGroup.Text
                    id="basic-addon2"
                    className="bg-transparent"
                    style={{ borderLeftColor: 'transparent' }}
                >
                    <i className="bi bi-search text-white"></i>
                </InputGroup.Text>
            </InputGroup>
        </>
    );
}