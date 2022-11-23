import { sampleAPIData } from "../../reducers/API"

export default function Select() {

    return (
        <>
            <select>
                {
                    sampleAPIData.data.categories.map((category, index) => {
                        return (
                            <option key={index} value={category.name}>{category.name}</option>
                        )
                    })
                }
            </select>
        </>
    )
}