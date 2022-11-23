import { AppState } from '../../reducers/AppContext';
import { sampleAPIData } from '../../reducers/API';
import { useState, useEffect } from 'react';
import { Link, } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

export default function Categories() {

    const [categories, setCategories] = useState([]);
    const { selectedCategory, setSelectedCategory, setSelectedView } = AppState();

    useEffect(() => {
        setCategories([]);
        sampleAPIData.data.categories.forEach((category) => {
            setCategories((prev) => [...prev, category]);
        });
    }, []);

    const handleCategoryClick = (category) => {
        console.log(category, "selected");
        setSelectedCategory(category);
        setSelectedView("desktop");
    }


    return (
        <>
            <h2 className='text-center'>Transfer your product pages today</h2>
            <Row xs={1} md={window.innerWidth < 600 ? 2 : 4} className="g-4 text-center">
                {
                    categories.map((category, index) => {
                        return (
                            <div
                                key={index}
                            >
                                <Link
                                    onClick={() => handleCategoryClick(category)}
                                    to={`/category/${category.name}`}
                                >
                                    <Col key={index}>
                                        {category.name}
                                    </Col>
                                </Link>
                            </div >
                        );
                    })
                }
            </Row >
        </>
    );
}