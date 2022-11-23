import { AppState } from '../../reducers/AppContext';
import { sampleAPIData } from '../../reducers/API';
import { useState, useEffect } from 'react';
import { Link, } from 'react-router-dom';
import { Row, Col, Button } from 'react-bootstrap';
import Search from './Search';
import Select from './Select';

export default function Categories() {

    const [categories, setCategories] = useState([]);
    const { setSelectedCategory, setSelectedView } = AppState();
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
                className="d-flex justify-content-end"
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
                            <td><Search /></td>
                            <td><Select /></td>
                        </tr>
                    </tbody>
                </table>
            }


            <Row xs={1} md={window.innerWidth < 600 ? 2 : 4} className="g-4 text-center">
                {
                    categories.map((category, index) => {
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
        </>
    );
}