import { Row, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { AppState } from '../../reducers/AppContext';

export default function Images() {
    const [images, setImages] = useState([]);
    const { selectedCategory, selectedView, setSelectedImage } = AppState();

    useEffect(() => {
        setImages([]);
        selectedCategory.images[selectedView]?.forEach((image) => {
            setImages((prev) => [...prev, image]);
        });
    }, [selectedView, selectedCategory]);

    useEffect(() => {
        console.log(selectedCategory, "Images", images);
    }, [images, selectedCategory]);

    const handleImageClick = (image) => {
        setSelectedImage(image);
        console.log(image, "selected");
    }

    return (
        <>
            <h3 className='text-center mb-3'>Category/{selectedCategory?.name}</h3>
            <Row xs={1} md={3} className="g-4 text-center">
                {
                    images.map((image, index) => {
                        return (
                            <Col key={index}>
                                <img src={image.image_url} alt={image.name}
                                    onClick={() => handleImageClick(image)}
                                ></img>
                            </Col>
                        );
                    })
                }
            </Row >
        </>
    );

}