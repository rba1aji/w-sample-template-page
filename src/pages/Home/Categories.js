import { sampleAPIData } from '../../reducers/API';
import { useState, useEffect } from 'react';
import { ListGroup } from 'react-bootstrap';
import { Form } from 'react-bootstrap';

export default function SubCategories() {

    // const [subCategories, setSubCategories] = useState([]);

    // useEffect(() => {
    //     sampleAPIData.data.categories.forEach((category) => {
    //         category.subCategories.forEach((subCategory) => {
    //             setSubCategories((prev) => [...prev, subCategory]);
    //         });
    //     });
    // }, []);

    // console.log(subCategories);

    const [categories, setCategories] = useState([]);

    useEffect(() => {
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
                            <>
                                <Form.Check>
                                    <ListGroup.Item key={index} style={{ color: '#fff', background: 'transparent' }}>
                                        {category.name}
                                    </ListGroup.Item>
                                </Form.Check>
                            </>
                        );
                    })
                }
            </ListGroup>
        </>
    );
}