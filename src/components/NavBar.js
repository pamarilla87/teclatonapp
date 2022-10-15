import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CartWidget from './CartWidget';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavBar.css'

const NavBar = (props) => {
    const {nombre="Invitado"} = props
    return (
        <>
            <Container fluid id="cont-reset-side-pad">
                    <Row id="row-navbar-styles">
                        <Col md={12} xl={7}>
                            <Nav id="just-start-nowrap">
                                <NavDropdown title="Categorías" >
                                    <NavDropdown.Item href="#">Vehículos</NavDropdown.Item>
                                    <NavDropdown.Item href="#">Inmuebles</NavDropdown.Item>
                                    <NavDropdown.Item href="#">Supermercado</NavDropdown.Item>
                                    <NavDropdown.Item href="#">Tecnologia</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href="#">Ofertas</Nav.Link>
                                <Nav.Link href="#">Historial</Nav.Link>
                                <Nav.Link href="#">Supermercado</Nav.Link>
                                <Nav.Link href="#">Moda</Nav.Link>
                                <Nav.Link href="#">Historial</Nav.Link>
                                <Nav.Link href="#">Ayuda</Nav.Link>
                            </Nav>
                        </Col>
                        <Col md={12} xl={5}>
                            <Nav id="just-end-to-center-nowrap">
                                <Nav.Link href="#" >Hola {nombre}!</Nav.Link>
                                <Nav.Link href="#" >Mis Compras</Nav.Link>
                                <Nav.Link href="#" >Favoritos</Nav.Link>
                                <Nav.Link href="#" > <CartWidget productos="4"/> </Nav.Link>
                            </Nav>
                        </Col>
                    </Row>
            </Container>
        </>
    )
}

export default NavBar