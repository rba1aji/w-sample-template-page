import { Row, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { AppState } from '../../reducers/AppContext';
import ModalPreview from './ModalPreview';
import { Link } from 'react-router-dom';

export default function Index() {
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
            <h3 className='ms-5 mb-3'>
                <Link to="/categories">Category</Link>
                /{selectedCategory?.name}
            </h3>
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
            <ModalPreview />
        </>
    );

}