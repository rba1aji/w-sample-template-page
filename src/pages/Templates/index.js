import { Row, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { AppState } from '../../reducers/AppContext';
import ModalPreview from './ModalPreview';
import '../../styles/Templates.css';
import { useParams } from 'react-router-dom';
import Header from './Header';

export default function Index() {
    const [templates, setTemplates] = useState([]);
    const {
        categories,
        selectedCategory, setSelectedCategory,
        selectedTemplate, setSelectedTemplate,
        setSelectedView,
    } = AppState();
    const categoryNameInUrl = useParams()?.categoryName;
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        setSelectedCategory(
            categories.find((category) => category.name === categoryNameInUrl.replace(/-/g, ' '))
        )
    }, [categoryNameInUrl, categories, setSelectedCategory]);

    useEffect(() => {
        setTemplates([]);
        selectedCategory?.templates?.forEach((template) => {
            setTemplates((prev) => [...prev, template]);
        });
    }, [categoryNameInUrl, selectedCategory, selectedCategory?.templates]);

    const handleTemplateClick = (template) => {
        setSelectedView('desktop');
        setSelectedTemplate(template);
    }

    return (
        <>
            <Header
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                selectedCategoryName={selectedCategory?.name}
            />

            {/* templates of a selected category */}
            <Row xs={1} md={3} className="mx-3 g-4 text-center">
                {
                    templates?.map((template, index) => {
                        if (searchQuery) {
                            if (template.name !== searchQuery) {
                                return null;
                            }
                        }
                        return (
                            <Col key={index}>
                                <div className='template-feature-image-container'>
                                    <img
                                        src={template.desktop} //template feature image 
                                        alt={template.name}
                                        onClick={() => handleTemplateClick(template)}
                                        className='img-fluid template-feature-image'
                                    />
                                    <h5 className='template-name-on-ft-image py-2'
                                        style={{
                                            top: template.name.length > 20 ? '89%' : '93.5%'
                                        }}
                                    >
                                        {template.name}
                                    </h5>
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