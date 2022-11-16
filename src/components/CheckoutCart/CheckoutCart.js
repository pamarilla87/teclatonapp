import React, { useContext, useState, useEffect } from 'react'
import customContext from '../CustomProvider/CustomProvider'
import { Row, Container, Col } from 'react-bootstrap'
import CheckoutCard from '../CheckoutCard/CheckoutCard'
import { fetchProductsInCart, cartTotal, formatNumber } from '../Utils/FetchProducts'
import LoadingScreen from '../LoadingScreen/LoadingScreen'
import './CheckoutCart.css'

const CheckoutCart = () => {
    const { carrito } = useContext(customContext)

    const [productos, setProductos] = useState([])

    useEffect(() => {
        fetchProductsInCart(carrito)
            .then(result => setProductos(result))

    }, [productos, carrito])

    if (productos?.length <= 0) {
        return <LoadingScreen />
    } else {
        return (
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
                            <CheckoutCard key={product.id} {...product} />
                        )
                    })
                }
                <Row className='chCard_Row'>
                    <Col  sm={{span: 3, offset: 6}}>TOTAL: </Col>
                    <Col className='overStrike'>
                       $ {formatNumber(cartTotal(productos))}
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default CheckoutCart