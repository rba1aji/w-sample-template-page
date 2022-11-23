import { Row, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { AppState } from '../../reducers/AppContext';
import ModalPreview from './ModalPreview';
import { Link } from 'react-router-dom';

export default function Index() {
    const [templates, setTemplates] = useState([]);
    const { selectedCategory, selectedView, setSelectedTemplate } = AppState();

    useEffect(() => {
        setTemplates([]);
        selectedCategory.templates[selectedView]?.forEach((image) => {
            setTemplates((prev) => [...prev, image]);
        });
    }, [selectedView, selectedCategory]);

    useEffect(() => {
        console.log(selectedCategory, "templates", templates);
    }, [templates, selectedCategory]);

    const handleTemplateClick = (template) => {
        setSelectedTemplate(template);
        console.log(template, "selected");
    }

    return (
        <>
            <h3 className='ms-5 mb-3'>
                <Link to="/categories">Category</Link>
                /{selectedCategory?.name}
            </h3>
            <Row xs={1} md={3} className="g-4 text-center">
                {
                    templates.map((template, index) => {
                        return (
                            <Col key={index}>
                                <img
                                    src={template.image_url}
                                    alt={template.name}
                                    onClick={() => handleTemplateClick(template)}
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