import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import {signOut} from 'firebase/auth';
import fit from '../../../images/logo/fit.png'


const Header = () => {
    const [user] =useAuthState(auth);

    const handleSignOut =()=>{
        signOut(auth);
    }
    return (
        <div className='fs-4'>
            <Navbar collapseOnSelect expand="lg"  bg="light" >
                <Container>
                    <Navbar.Brand  as={Link} to="/"><img src={fit} width={'120px'} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link  href="home#services" >Services</Nav.Link>
                            <Nav.Link as={Link} to="aboutMe">About Me</Nav.Link>
                            <Nav.Link as={Link} to="blogs">Blogs</Nav.Link>
                            
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="contact">Contacts</Nav.Link>
                           {
                               user ? '' :
                                <Nav.Link as={Link} to="/register">Register</Nav.Link>
                           }

                          { user ? 
                          <Nav.Link onClick={handleSignOut} as={Link} to="/login">
                          Sign out
                      </Nav.Link>
                          :
                               <Nav.Link as={Link} to="/login">
                               Login
                           </Nav.Link>
                          }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;