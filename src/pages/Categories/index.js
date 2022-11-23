import { AppState } from '../../reducers/AppContext';
import { sampleAPIData } from '../../reducers/API';
import { useState, useEffect } from 'react';
import { Link, } from 'react-router-dom';
import { Row, Col, Button } from 'react-bootstrap';
import Search from './Search';
import Select from './Select';

export default function Categories() {

    const [categories, setCategories] = useState([]);
    const { setSelectedCategory, setSelectedView, categorySearchQuery } = AppState();
    const [showFilters, setShowFilters] = useState(false);

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
            <p className='text-center'>Checkout some popular template design</p>

            <div
                className="d-flex justify-content-end pe-4"
                style={{
                    transform: "translateY(-60px)",
                }}
            >
                <Button
                    variant='outline-light'
                    onClick={() => setShowFilters(!showFilters)}
                >
                    Filters
                </Button>
            </div>

            {
                showFilters &&
                <table style={{
                    width: "50vw",
                }}>
                    <tbody>
                        <tr>
                            {
                                [<Search />, <Select />].map((filter, index) => {
                                    return (
                                        <td
                                            key={index}
                                            className='align-middle px-5'
                                            style={{
                                                width: "50%",
                                            }}>
                                            {filter}
                                        </td>
                                    );
                                })
                            }
                        </tr>
                    </tbody>
                </table>
            }

            <br /><br />

            <div className='d-block'>
                <Row xs={1} md={4} className="g-4">
                    {
                        categories.map((category, index) => {
                            if (categorySearchQuery) {
                                if (!category.name.toLowerCase().includes(categorySearchQuery.toLowerCase())) {
                                    return;
                                }
                            }
                            return (
                                <div
                                    key={index}
                                >
                                    <Link
                                        onClick={() => handleCategoryClick(category)}
                                        to={`/category/${category?.name?.replaceAll(" ", "-")}`}
                                    >
                                        <Col key={index}>
                                            <div className="category-img-container">
                                                <img
                                                    src={category.image}
                                                    alt={category.name}
                                                    className="category-image"
                                                    style={{ width: '100%' }}
                                                />
                                                <div className="category-img-name-middle">
                                                    <div className='category-name-on-img'>{category.name}</div>
                                                </div>
                                            </div>
                                        </Col>
                                    </Link>
                                </div >
                            );
                        })
                    }
                </Row >
            </div>
        </>
    );
}