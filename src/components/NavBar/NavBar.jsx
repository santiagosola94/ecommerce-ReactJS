import React from 'react'
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'


function NavBar() {
    return (
    <Navbar bg="dark" expand="lg" variant="dark">
    <Container>
        <Navbar.Brand href="#home" className='coloresDeLetra'>SportSide - Indumentaria Deportiva</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
            <Nav.Link href="#home" className='coloresDeLetra'>Inicio</Nav.Link>
            <Nav.Link href="#link" className='coloresDeLetra'>Carrito</Nav.Link>
            <NavDropdown className='coloresDeLetra' title="Productos" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Camisetas</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Botines</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.3">Ropa Deportiva</NavDropdown.Item>
            </NavDropdown>
        </Nav>
        </Navbar.Collapse>
    </Container>
    </Navbar>
    )
}

export default NavBar