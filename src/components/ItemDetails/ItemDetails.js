import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetails.css'


const ItemDetails = ({ product }) => {

    return (
        <Row className="justify-content-md-center" >
            <Col className="itemsCols">
                {
                    <Card className="cardContainer"  >
                        <Card.Img variant="top" src={product.img} />
                        <Card.Body>
                            <Card.Title>$ {product.price}</Card.Title>
                            <Card.Text>{product.description}</Card.Text>
                            <ItemCount stock={product.stock} />
                        </Card.Body>
                    </Card>
                }
            </Col>
        </Row>
    )
}

export default ItemDetails