import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Button, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hook/useAuth';

const Header = () => {
    const { user, logout } = useAuth();
    return (
        <div>
            <>
                <Navbar sticky="top" bg="light" variant="light" collapseOnSelect expand="lg">
                    <Container>
                        <Navbar.Brand href="#home">Navbar</Navbar.Brand>

                        <Nav className="me-auto">
                            <br />
                            <NavLink as={Link} to="/home">Home</NavLink>
                            <NavLink as={Link} to="/services">Services</NavLink>
                            <NavLink as={Link} to="/newpatients">Newpatient</NavLink>
                            {user?.email ?
                                <Button variant="light">Logout</Button> :
                                <NavLink as={Link} to="/loggedin">Log in</NavLink>
                            }
                        </Nav>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <Navbar.Text>
                                Signed in as: <a href="#login">{user?.displayName}</a>
                            </Navbar.Text>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>

        </div>
    );
};

export default Header;
