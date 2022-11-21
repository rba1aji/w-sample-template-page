import { sampleAPIData } from '../../reducers/API';
import { useState, useEffect } from 'react';
import { ListGroup } from 'react-bootstrap';
import { AppState } from '../../reducers/AppContext';
import Views from './Views';

export default function Categories() {

    const [categories, setCategories] = useState([]);
    const { selectedCategory, setSelectedCategory, setSelectedView } = AppState();

    useEffect(() => {
        setCategories([]);

        sampleAPIData.data.categories.forEach((category) => {
            setCategories((prev) => [...prev, category]);
        });
    }, []);

    const handleCategoryClick = (category) => {
        console.log(category, "selected");
        setSelectedCategory(category);
        setSelectedView("desktop");
    }

    return (
        <>
            <h4 className='text-center'>Categories</h4>
            <ListGroup className='text-center'>
                {
                    categories.map((category, index) => {
                        return (
                            <>
                                <ListGroup.Item key={index}
                                    style={{ color: '#fff', background: 'transparent' }}
                                    onClick={() => handleCategoryClick(category)}
                                >
                                    {category.name}
                                </ListGroup.Item>
                                {
                                    selectedCategory === category && <Views />
                                }
                            </>
                        );
                    })
                }
            </ListGroup>
        </>
    );
}