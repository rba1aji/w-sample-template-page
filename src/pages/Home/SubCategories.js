import { useState, useEffect } from 'react';
import { ListGroup } from 'react-bootstrap';
import { AppState } from '../../reducers/AppContext';

export default function SubCategories() {

    const [subCategories, setSubCategories] = useState([]);
    const { selectedCategory, setSelectedSubCategory } = AppState();

    useEffect(() => {
        setSubCategories([]);

        selectedCategory?.subCategories?.forEach((subCategory) => {
            setSubCategories((prev) => [...prev, subCategory]);
        });
    }, [selectedCategory]);

    const handleSubCategoryClick = (subCategory) => {
        setSelectedSubCategory(subCategory);
        console.log(subCategory, "selected");
    }

    return (
        <>
            <h4 className='text-center'>Sub Categories</h4>
            <ListGroup className='text-center'>
                {
                    subCategories?.map((subCategory, index) => {
                        return (
                            <ListGroup.Item key={index}
                                style={{ color: '#fff', background: 'transparent' }}
                                onClick={() => handleSubCategoryClick(subCategory)}
                            >
                                {subCategory.name}
                            </ListGroup.Item>
                        );
                    })
                }
            </ListGroup>
        </>
    );
}