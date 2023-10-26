import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function Header() {
    return (
        <Navbar bg="light" expand="lg" className="px-4" >
            <LinkContainer to="/">
                <Navbar.Brand>Perfil de Usuario</Navbar.Brand>
            </LinkContainer>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <LinkContainer to="/">
                        <Nav.Link>Inicio</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/about">
                        <Nav.Link>Acerca de</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/hobbies">
                        <Nav.Link>Hobbies</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/contact">
                        <Nav.Link>Contacto</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;
