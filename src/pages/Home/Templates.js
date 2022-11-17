import { Row, Col } from 'react-bootstrap';
import { sampleAPIData } from '../../reducers/API';
import { useState, useEffect } from 'react';

export default function Templates() {
    // const allImages = sampleAPIData.data.categories.forEach((category) => {
    //     category.subCategories.forEach((subCategory) => {
    //         subCategory.images.forEach((image) => {
    //             return image;
    //         });
    //     });
    // });
    const [allImages, setAllImages] = useState([]);

    useState(() => {
        sampleAPIData.data.categories.map((category) => {
            category.subCategories.map((subCategory) => {
                subCategory.images.map((image) => {
                    setAllImages((prev) => [...prev, image]);
                });
            });
        });
        console.log(allImages);
    }, []);

    return (
        <>
            <h3 className='text-center'>Available templates</h3>
            <Row xs={1} md={2} className="g-4">
                {
                    allImages.map((image, index) => {
                        return (
                            <Col>
                                <img src={image.image_url} ></img>
                            </Col>
                        );
                    })
                }
            </Row >
        </>
    );

}