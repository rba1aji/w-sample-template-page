import { sampleAPIData } from '../../reducers/API';
import { useState, useEffect } from 'react';
import { ListGroup } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { AppState } from '../../reducers/AppContext';

export default function SubCategories() {

    const [categories, setCategories] = useState([]);
    const { setSelectedCategory } = AppState();

    useEffect(() => {
        setCategories([]);
        sampleAPIData.data.categories.forEach((category) => {
            setCategories((prev) => [...prev, category]);
        });
    }, []);

    console.log(categories);

    return (
        <>
            <h4 className='text-center'>Categories</h4>
            <ListGroup className='text-center'>
                {
                    categories.map((category, index) => {
                        return (
                            // <Form.Check type='radio'
                            //     label={
                            <ListGroup.Item key={index}
                                style={{ color: '#fff', background: 'transparent' }}
                                onClick={() => { setSelectedCategory(category) }}
                            >
                                {category.name}
                            </ListGroup.Item>
                            // } />
                        );
                    })
                }
            </ListGroup>
        </>
    );
}