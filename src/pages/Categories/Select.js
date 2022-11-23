import { sampleAPIData } from "../../reducers/API"
import { Form } from "react-bootstrap"

export default function Select() {

    return (
        <>
            <Form.Select
                className='bg-transparent text-white'
                style={{ width: '100%' }}
                size='sm'
            >
                <option className='bg-transparent'>{"All"}</option>
                {
                    sampleAPIData.data.categories.map((category, index) => {
                        return (
                            <option key={index} value={category.name} className="bg-transparent">
                                {category.name}
                            </option>
                        )
                    })
                }
            </Form.Select>
        </>
    )
}