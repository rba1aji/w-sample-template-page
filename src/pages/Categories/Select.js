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
            <Form.Select
                className='bg-transparent text-white'
                style={{ width: '100%' }}
                size='sm'
            >
                <option
                    className='bg-transparent'
                    onClick={() => handleCategoryOptionClick('All')}
                >
                    {"All"}
                </option>
                {
                    sampleAPIData.data.categories.map((category, index) => {
                        return (
                            <option
                                key={index}
                                value={category.name}
                                className="bg-transparent"
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