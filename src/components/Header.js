import { Button, Nav, Navbar, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'

export default function Header() {
    return (

        <Navbar collapseOnSelect expand="lg" variant="dark" className='header'>
            <Container className='py-1'>
                <Navbar.Brand as={LinkContainer} to="/">
                    <img
                        src="https://uploads-ssl.webflow.com/62ad955e42bdf83246d9b9d4/62ad97514b532a8779c3a07f_logo%402x.png"
                        loading="lazy"
                        alt="Weaveroo"
                        width="160"
                    />
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
}
