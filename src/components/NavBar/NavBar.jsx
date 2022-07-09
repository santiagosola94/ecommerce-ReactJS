import React from 'react'
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'
import CartWidget from '../CartWidget/CartWidget'
import {NavLink} from 'react-router-dom'
import './navBar.css'
import LoginWidget from '../LoginWidget/LoginWidget'

function NavBar() {
    return (
    <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
            <NavLink to="/" className='brandStyle'>SportSide - Indumentaria Deportiva</NavLink>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto justify-content-center">
                <NavLink to='/' className={({ isActive }) => isActive ? 'activa3' : 'coloresDeLetra' }>Inicio</NavLink>
                <NavLink to='/carrito' className={({ isActive }) => isActive ? 'activa3' : 'coloresDeLetra' }>Carrito</NavLink>
                
                <NavDropdown className='coloresDeLetra' title="Productos" id="basic-nav-dropdown">

                    <NavDropdown.Item as={NavLink} to='/categoria/camisetas'>Camisetas</NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to='/categoria/botines'>Botines</NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to='/categoria/ropadeportiva'>Ropa Deportiva</NavDropdown.Item>


                </NavDropdown>
                
            </Nav>

            <LoginWidget />
            <CartWidget />

            </Navbar.Collapse>
        </Container>
    </Navbar>
    )
}

export default NavBar