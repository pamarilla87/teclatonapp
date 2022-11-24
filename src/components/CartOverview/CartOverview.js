import React, { useContext, useState, useEffect } from 'react'
import customContext from '../CustomProvider/CustomProvider'
import { Row, Container, Col, Button } from 'react-bootstrap'
import CheckoutCardItem from '../CheckoutCardItem/CheckoutCardItem'
import { fetchProductsInCart, cartTotal, formatNumber } from '../Utils/FetchProducts'
import LoadingScreen from '../LoadingScreen/LoadingScreen'
import { Link } from "react-router-dom"
import './CartOverview.css'

const CartOverview = () => {
    const { emptyCart, carrito } = useContext(customContext)

    const [productos, setProductos] = useState()

    useEffect(() => {
        fetchProductsInCart(carrito)
            .then(result => {
                setProductos(result)
            })
            .catch((error) => {
                console.log(error)
            })

    }, [productos, carrito])

    return (
        !productos ? <LoadingScreen message={'carrito'} /> : !productos.length>0 ? <h1> No hay ningún producto en el carrito  </h1> :
            (
                <Container fluid className='chCard__Container'>
                    <Row className='chCard_Row'>
                        <Col></Col>
                        <Col>Descripcion</Col>
                        <Col>Cantidad</Col>
                        <Col>Total</Col>
                    </Row>
                    {
                        
                        productos.map(product => {
                            return (
                                <CheckoutCardItem key={product.id} {...product} />
                            )
                        })
                    }
                    <Row className='chCard_Row'>
                        <Col sm={{ span: 3, offset: 6 }}>TOTAL: </Col>
                        <Col className='overStrike'>
                            $ {formatNumber(cartTotal(productos))}
                        </Col>
                    </Row>

                    <Row>
                        <Col sm={{ span: 3, offset: 9 }}>
                            <Button onClick={() => { emptyCart() }} className='chButton'>Vaciar carrito</Button>
                            <Button as={Link} to="/checkout" className='chButton'>Continuar</Button>
                        </Col>
                    </Row>
                </Container>
            )
    )
}

export default CartOverview