import React from 'react'
import './ItemCard.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from "react-router-dom"
import { Card, Col, Button } from 'react-bootstrap'


const CardItem = ({id, description, price, stock, img}) => {

    return (
        <Col xs={12} md={6} lg={3} xxl={2} className="itemsCols">
            {
                <Card style={{width: '12rem'}} className="cardContainer"  >
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>$ {price}</Card.Title>
                        <Card.Text>{description}</Card.Text>
                        <Button as={Link} to={"../item/" + id} className="botonVer">Ver Detalles</Button>
                    </Card.Body>
                </Card>
            }
        </Col>
    )
}

export default CardItem