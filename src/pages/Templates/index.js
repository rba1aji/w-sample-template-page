import { Row, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { AppState } from '../../reducers/AppContext';
import ModalPreview from './ModalPreview';
import { Link } from 'react-router-dom';
import '../../styles/Templates.css';
import { useParams } from 'react-router-dom';
import Search from '../../components/Search';

export default function Index() {
    const [templates, setTemplates] = useState([]);
    const {
        categories,
        selectedCategory, setSelectedCategory,
        selectedTemplate, setSelectedTemplate
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

    const handleTemplateClick = (template) => setSelectedTemplate(template);

    return (
        <>
            <table className='templatespg-header'
                style={{ width: '100%' }}
            >
                <tbody><tr>
                    <td className='mb-0 ps-5 h3 fw-bold'>
                        <Link to="/">Category </Link> / {selectedCategory?.name}
                    </td>
                    <td
                        style={{ width: '30%' }}
                        className='text-end pe-5'
                    >
                        <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
                    </td>
                </tr></tbody>
            </table>

            {/* templates of a selected category */}
            <Row xs={1} md={3} className="mx-3 g-4 text-center">
                {
                    templates?.map((template, index) => {
                        if (searchQuery) {
                            if (!template.name.toLowerCase().includes(searchQuery.toLowerCase())) {
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