import { AppState } from '../../reducers/AppContext';
import { Link, } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import '../../styles/Categories.css';
import Filters from './Filters';

export default function Categories() {

    const {
        categories,
        setSelectedCategory, setSelectedView,
        categorySearchQuery
    } = AppState();

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        setSelectedView("desktop");
    }


    return (
        <>
            <h2 className='text-center'>Transfer your product pages today</h2>
            <p className='text-center mb-0'>Checkout some popular template design</p>

            <div
                className='categories-page-container'
            >

                <Filters />

                <br /><br />

                <Row xs={1} md={4} className="g-4 text-center">
                    {
                        categories.map((category, index) => {
                            if (categorySearchQuery) {
                                if (!category.name.toLowerCase().includes(categorySearchQuery.toLowerCase())) {
                                    return null;
                                }
                            }
                            return (
                                <Col key={index}
                                    as={Link}
                                    onClick={() => handleCategoryClick(category)}
                                    to={`/category/${category?.name?.replaceAll(" ", "-")}`}
                                >
                                    <div className="category-img-container text-center">
                                        <img
                                            src={category.image}
                                            alt={category.name}
                                            className="category-image img-fluid"
                                        />
                                        <div className="category-img-name-middle">
                                            <div className='category-name-on-img'>{category.name}</div>
                                        </div>
                                    </div>
                                </Col>
                            );
                        })
                    }
                </Row >
            </div>
        </>
    );
}