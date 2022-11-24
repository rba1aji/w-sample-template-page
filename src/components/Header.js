import { Button, Nav, Navbar, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'

export default function Header() {
    return (

        <Navbar collapseOnSelect expand="lg" variant="dark" className='header'>
            <Container>
                <Navbar.Brand as={LinkContainer} to="/">
                    <img
                        src="https://uploads-ssl.webflow.com/62ad955e42bdf83246d9b9d4/62ad97514b532a8779c3a07f_logo%402x.png"
                        loading="lazy"
                        alt="Weaveroo"
                        width="160" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Item as={LinkContainer} to="/" >
                            <Nav.Link className='pt-3 text-white'>Overview</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as={LinkContainer} to="/">
                            <Nav.Link className='pt-3 text-white'>Product
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item as={LinkContainer} to="/">
                            <Nav.Link className='pt-3 text-white'>Company
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item as={LinkContainer} to="/">
                            <Nav.Link>
                                <Button variant='warning'
                                    style={{
                                        borderRadius: '100px',
                                        backgroundImage: 'linear-gradient(135deg, #f6f993, #eaee37)'
                                    }}
                                    className='px-3 py-2'
                                >Book a demo</Button>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item as={LinkContainer} to='/categories'>
                            <Nav.Link>
                                <Button
                                    variant='warning'
                                    style={{
                                        borderRadius: '100px',
                                        backgroundImage: 'linear-gradient(135deg, #f6f993, #eaee37)'
                                    }}
                                    className='px-3 py-2'
                                > Sample template</Button>
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
