import { InputGroup, Form } from "react-bootstrap";
import { AppState } from "../../reducers/AppContext";
import SearchSuggestion from "./Select";

export default function Search() {
    const { categorySearchQuery, setCategorySearchQuery } = AppState();

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
                    value={categorySearchQuery}
                    onChange={(e) => setCategorySearchQuery(e.target.value)}
                />
                <InputGroup.Text
                    id="basic-addon2"
                    className="bg-transparent"
                    style={{ borderLeftColor: 'transparent' }}
                >
                    <i className="bi bi-search text-white"></i>
                </InputGroup.Text>
            </InputGroup>
            <SearchSuggestion />
        </>
    );
}