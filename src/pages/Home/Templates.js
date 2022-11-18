import { Row, Col } from 'react-bootstrap';
import { sampleAPIData } from '../../reducers/API';
import { useState, useEffect } from 'react';
import { AppState } from '../../reducers/AppContext';

export default function Templates() {
    const [images, setImages] = useState([]);
    const { selectedCategory } = AppState();

    useEffect(() => {
        setImages([]);
        sampleAPIData.data.categories.forEach((category) => {
            if (category.id === selectedCategory.id) {
                category.images.forEach((image) => {
                    setImages((prev) => [...prev, image]);
                });
            }
        })
    }, [selectedCategory]);


    console.log(images);

    return (
        <>
            <h3 className='text-center mb-3'>Category/{selectedCategory.name}</h3>
            <Row xs={1} md={3} className="g-4 text-center">
                {
                    images.map((image, index) => {
                        return (
                            <Col>
                                <img src={image.image_url} alt={image.name} ></img>
                            </Col>
                        );
                    })
                }
            </Row >
        </>
    );

}