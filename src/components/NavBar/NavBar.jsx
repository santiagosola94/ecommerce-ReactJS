import React from 'react'
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'
import CartWidget from '../CartWidget/CartWidget'
import {NavLink} from 'react-router-dom'


function NavBar() {
    return (
    <Navbar bg="dark" expand="lg" variant="dark">
    <Container>
        <Navbar.Brand href="#home" className='coloresDeLetra'>SportSide - Indumentaria Deportiva</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
            <NavLink to='/' className='coloresDeLetra'>Inicio</NavLink>
            <Nav.Link href="#link" className='coloresDeLetra'>Carrito</Nav.Link>
            <NavDropdown className='coloresDeLetra' title="Productos" id="basic-nav-dropdown">
            <NavLink to='/categoria/camisetas'>
                <NavDropdown.Item href="#action/3.1">Camisetas</NavDropdown.Item>
            </NavLink>
            <NavLink to='/categoria/botines'>
                <NavDropdown.Item href="#action/3.2">Botines</NavDropdown.Item>
            </NavLink>
            <NavDropdown.Divider />
            <NavLink to='/categoria/ropadeportiva'>
                <NavDropdown.Item href="#action/3.3">Ropa Deportiva</NavDropdown.Item>
            </NavLink>
            </NavDropdown>
            
        </Nav>

        <CartWidget />

        </Navbar.Collapse>
    </Container>
    </Navbar>
    )
}

export default NavBar