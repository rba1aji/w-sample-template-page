import { Row, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { AppState } from '../../reducers/AppContext';
import ModalPreview from './ModalPreview';
import { Link } from 'react-router-dom';
import '../../styles/Category.css';
import { useParams } from 'react-router-dom';

export default function Index() {
    const [templates, setTemplates] = useState([]);
    const {
        categories,
        selectedCategory, setSelectedCategory,
        selectedTemplate, setSelectedTemplate
    } = AppState();
    const categoryNameInUrl = useParams()?.categoryName;

    useEffect(() => {
        console.log("categoryNameInUrl", categoryNameInUrl);
        setSelectedCategory(
            categories.find((category) => category.name === categoryNameInUrl)
        )
    }, [categoryNameInUrl, categories, setSelectedCategory]);

    useEffect(() => {
        console.log("selectedCategory", selectedCategory);
        setTemplates([]);
        selectedCategory?.templates?.forEach((template) => {
            setTemplates((prev) => [...prev, template]);
        });
    }, [categoryNameInUrl, selectedCategory, selectedCategory?.templates]);

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
                <Link to="/">Category </Link>
                / {selectedCategory?.name}
            </h3>
            <Row xs={1} md={3} className="mx-3 g-4 text-center">
                {
                    templates?.map((template, index) => {
                        return (
                            <Col key={index}>
                                <div className='template-feature-image-container'>
                                    <img
                                        src={template.desktop} //template feature image !!
                                        alt={template.name}
                                        onClick={() => handleTemplateClick(template)}
                                        className='img-fluid template-feature-image'
                                    />
                                    <h5 className='template-name-on-ft-image py-2' >{template.name}</h5>
                                </div>
                            </Col>
                        );
                    })
                }
            </Row >
            {selectedTemplate && <ModalPreview />}
        </>
    );

}