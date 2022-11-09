import React, {useContext, useState} from 'react'
import { Card, Col, Row, Button } from 'react-bootstrap'
import ItemCount from '../ItemCount/ItemCount'
import customContext from '../CustomProvider/CustomProvider'
import './ItemDetails.css'

const ItemDetails = ({ product }) => {

    const [count, setCount] = useState(1);
    const {addProductToCart} = useContext(customContext)


    return (
        <Row className="justify-content-md-center" >
            <Col className="itemsCols">
                {
                    <Card className="cardContainer"  >
                        <Card.Img variant="top" src={product.img} />
                        <Card.Body>
                            <Card.Title>$ {product.price}</Card.Title>
                            <Card.Text>{product.description}</Card.Text>
                            <ItemCount stock={product.stock} count={count} setCount= {setCount} />
                            <Button onClick={() => {addProductToCart(product, count)}} className="botonAgregar">Agregar al carrito</Button>
                        </Card.Body>
                    </Card>
                }
            </Col>
        </Row>
    )
}

export default ItemDetails