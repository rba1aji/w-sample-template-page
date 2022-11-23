import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Header() {
    return (

        <Navbar collapseOnSelect expand="lg" variant="dark" className='header'>
            <Container>
                <Navbar.Brand href="#home">Weaveroo</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#features">Overview</Nav.Link>
                        <Nav.Link href="#pricing">Product</Nav.Link>
                        <Nav.Link href="#pricing">Company</Nav.Link>
                        <Nav.Link href="#deets">Book a demo</Nav.Link>
                        <Nav.Link eventKey={2} href='/categories'>
                            Sample template
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
