import { Form } from "react-bootstrap"
import { AppState } from "../../reducers/AppContext";
import { useNavigate } from 'react-router-dom';

export default function Select() {
    const {
        categories,
    } = AppState();
    const navigate = useNavigate();

    const handleCategoryOptionClick = (categoryName) => {
        navigate(`/category/${categoryName?.replaceAll(" ", "-")}`);
    }

    return (
        <>
            <Form.Label className='mb-1'>Select category</Form.Label>
            <Form.Select
                className='bg-transparent text-white'
                style={{ width: '100%' }}
                size='sm'
                onChange={(e) => handleCategoryOptionClick(e.target.value)}
            >
                <option
                    className='bg-black text-white py-2'
                >
                    {"All"}
                </option>
                {
                    categories?.map((category, index) => {
                        return (
                            <option
                                key={index}
                                value={category.name}
                                className="bg-black text-white py-2"
                            >
                                {category.name}
                            </option>
                        )
                    })
                }
            </Form.Select>
        </>
    )
}