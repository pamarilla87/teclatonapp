import React, {useContext} from 'react'
import { Card, Col, Row, Button } from 'react-bootstrap'
import ItemCount from '../ItemCount/ItemCount'
import customContext from '../CustomProvider/CustomProvider'
import './ItemDetails.css'
import { formatNumber } from '../Utils/FetchProducts'

const ItemDetails = ({ product }) => {

    const {addProductToCart, count} = useContext(customContext)

    return (
        <Row className="justify-content-md-center" >
            <Col className="itemsCols">
                    <Card className="cardContainer"  >
                        <Card.Img variant="top" src={product.img} />
                        <Card.Body>
                            <Card.Title>$ {formatNumber(product.price)}</Card.Title>
                            <Card.Text>{product.description}</Card.Text>
                            <ItemCount stock={product.stock} />
                            <Button onClick={() => {addProductToCart(product, count)}} className="botonAgregar">Agregar al carrito</Button>
                        </Card.Body>
                    </Card>
            </Col>
        </Row>
    )
}

export default ItemDetails