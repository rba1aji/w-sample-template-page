import { sampleAPIData } from "../../reducers/API"
import { Form } from "react-bootstrap"
import { AppState } from "../../reducers/AppContext";

export default function Select() {
    const { setCategorySearchQuery } = AppState();

    const handleCategoryOptionClick = (categoryName) => {
        categoryName === 'All' ? setCategorySearchQuery('') : setCategorySearchQuery(categoryName);
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
                    sampleAPIData.data.categories.map((category, index) => {
                        return (
                            <option
                                key={index}
                                value={category.name}
                                className="bg-black text-white py-2"
                                onClick={() => handleCategoryOptionClick(category.name)}
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