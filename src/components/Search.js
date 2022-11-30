import { InputGroup, Form } from "react-bootstrap";

export default function Search(props) {
    const { searchQuery, setSearchQuery } = props;

    return (
        <>
            <Form.Label className='mb-1'>Search category</Form.Label>
            <InputGroup size='sm'>
                <Form.Control
                    className='bg-transparent '
                    placeholder=""
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    style={{
                        color: 'white',
                        borderRightColor: 'transparent'
                    }}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
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