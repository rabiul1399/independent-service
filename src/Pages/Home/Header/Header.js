import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div className='fs-4'>
            <Navbar collapseOnSelect expand="lg"  bg="light" >
                <Container>
                    <Navbar.Brand as={Link} to="/">Alex Stone</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link href="#aboutMe">About Me</Nav.Link>
                            <Nav.Link  href="#services" >Services</Nav.Link>
                            <Nav.Link href="#features">Features</Nav.Link>
                            
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="contact">Contacts</Nav.Link>
                            <Nav.Link as={Link} to="/register">Register</Nav.Link>
                            <Nav.Link as={Link} to="/login">
                                Login
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;