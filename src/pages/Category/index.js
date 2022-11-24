import { Row, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { AppState } from '../../reducers/AppContext';
import ModalPreview from './ModalPreview';
import { Link } from 'react-router-dom';
import '../../styles/Category.css';

export default function Index() {
    const [templates, setTemplates] = useState([]);
    const { selectedCategory, selectedTemplate, setSelectedTemplate } = AppState();

    useEffect(() => {
        setTemplates([]);
        selectedCategory.templates?.forEach((template) => {
            setTemplates((prev) => [...prev, template]);
        });
    }, [selectedCategory]);

    useEffect(() => {
        console.log(selectedCategory, "templates", templates);
    }, [templates, selectedCategory]);

    const handleTemplateClick = (template) => {
        setSelectedTemplate(template);
        console.log(template, "selected");
    }

    return (
        <>
            <h3 className='mb-0 ps-5'>
                <Link to="/categories">Category </Link>
                / {selectedCategory?.name}
            </h3>
            <Row xs={1} md={3} className="g-4 text-center">
                {
                    templates.map((template, index) => {
                        return (
                            <Col key={index}>
                                <img
                                    src={template.desktop} //template feature image !!
                                    alt={template.name}
                                    onClick={() => handleTemplateClick(template)}
                                    className='img-fluid template-feature-image'
                                ></img>
                            </Col>
                        );
                    })
                }
            </Row >
            {selectedTemplate && <ModalPreview />}
        </>
    );

}