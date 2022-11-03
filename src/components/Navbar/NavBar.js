import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CartWidget from '../CartWidget/CartWidget';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from "react-router-dom"
import './NavBar.css'

const NavBar = (props) => {
    const {nombre="Invitado"} = props
    return (
        <>
            <Container fluid id="cont-reset-side-pad">
                    <Row id="row-navbar-styles">
                        <Col md={12} xl={7}>
                            <Nav id="just-start-nowrap">
                                <NavDropdown id="nav-dropdown-styles" title="Categorías" >
                                    <NavDropdown.Item as={Link} to="/categories/videocard">Placas de Video</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/categories/storage">Almacenamiento</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/categories/cpu">Procesadores</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/categories/motherboards">Motherboards</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link as={Link} to="/products">Home</Nav.Link>
                                <Nav.Link as={Link} to="/history">Historial</Nav.Link>
                                <Nav.Link as={Link} to="/supermarket">Supermercado</Nav.Link>
                                <Nav.Link as={Link} to="/fashion">Moda</Nav.Link>
                                <Nav.Link as={Link} to="/help">Ayuda</Nav.Link>
                            </Nav>
                        </Col>
                        <Col md={12} xl={5}>
                            <Nav id="just-end-to-center-nowrap">
                                <Nav.Link as={Link} to="/" >Hola {nombre}!</Nav.Link>
                                <Nav.Link as={Link} to="/my-purchases" >Mis Compras</Nav.Link>
                                <Nav.Link as={Link} to="/favs" >Favoritos</Nav.Link>
                                <Nav.Link as={Link} to="/cart" > <CartWidget productos="4"/> </Nav.Link>
                            </Nav>
                        </Col>
                    </Row>
            </Container>
        </>
    )
}

export default NavBar