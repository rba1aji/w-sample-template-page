import { Row, Col } from 'react-bootstrap';
import { sampleAPIData } from '../../reducers/API';
import { useState, useEffect } from 'react';

export default function Templates() {
    const [allImages, setAllImages] = useState([]);

    useEffect(() => {
        sampleAPIData.data.categories.forEach((category) => {
            category.subCategories.forEach((subCategory) => {
                subCategory.images.forEach((image) => {
                    setAllImages((prev) => [...prev, image]);
                });
            });
        });
    }, []);


    console.log(allImages);

    return (
        <>
            <h3 className='text-center mb-3'>Available templates</h3>
            <Row xs={1} md={3} className="g-4 text-center">
                {
                    allImages.map((image, index) => {
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