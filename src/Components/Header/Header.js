import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Carousel from 'react-bootstrap/Carousel';
import { NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <>
                <Navbar bg="light" variant="light">
                    <Container>
                        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                        <Nav className="me-auto">
                            <NavLink as={Link} to="/home">Home</NavLink>
                            <NavLink as={Link} to="/services">Services</NavLink>
                            <NavLink as={Link} to="/newpatients">Newpatient</NavLink>
                            <NavLink as={Link} to="/loggedin">Log in</NavLink>
                        </Nav>
                    </Container>
                </Navbar>
            </>

        </div>
    );
};

export default Header;
