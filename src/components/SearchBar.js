import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './SearchBar.css'
import logo from './logo.svg';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function SearchBar() {
    return (
        <Container fluid id="cont-bg">
            <Row className="searchBarText">
                <Col sm={12} lg={3} >
                    <img src={logo} className="nav-logo" alt="logo temporario" />
                    Teclaton Store
                </Col>
                <Col sm={6} lg={6} >
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Buscar un producto"
                            className="me-10"
                            aria-label="Search"
                        />
                    </Form>
                </Col>
                <Col sm={12} lg={3}  id="offer-just">
                    Ofertas por tiempo limitado!
                </Col>
            </Row>

        </Container>
    )
}
export default SearchBar;