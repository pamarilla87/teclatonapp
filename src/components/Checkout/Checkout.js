import React, { useContext, useRef, useState} from 'react'
import customContext from '../CustomProvider/CustomProvider'
import { Row, Col, Container, Form, Button } from 'react-bootstrap'
import CheckoutCardItem from '../CheckoutCardItem/CheckoutCardItem'
import { submitOrder } from '../Utils/FetchProducts'
import OrderConfirmation from '../OrderConfirmation/OrderConfirmation'


const Checkout = () => {
  const { carrito, emptyCart } = useContext(customContext)
  const [customer, setCustomer] = useState({})
  const [orderId, setOrderId] = useState('')
  const [validEmail, setValidEmail] = useState(false)

  const refName = useRef()
  const refEmail = useRef()
  const refConfEmail = useRef()
  const refAddress = useRef()

  const validateEmail = () => {
    if (refEmail.current.value===refConfEmail.current.value) {
      setValidEmail(true)
    } else
    setValidEmail(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const cust = { name: refName.current.value, email: refEmail.current.value, address: refAddress.current.value }
    submitOrder(cust, carrito)
      .then((docRef) => {
        setOrderId(docRef.id)
        setCustomer(cust)
        emptyCart()

      })
      .catch((error) => {
        console.log(error)
      })
  }

  if (orderId.length > 0) {
    return <OrderConfirmation order={orderId} customer={customer} />
  } else
    return (
      <Container fluid>
        <Row className='mx-1 my-5 '>
          <Col className='ps-0'>
            <Form noValidate  onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formNames">
                <Form.Label>Nombre y Apellido</Form.Label>
                <Form.Control required ref={refName} type="text" placeholder="Ingrese su nombre y apellido" required />
              </Form.Group>

              <Form.Group className="mb-3 mt-3" controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control ref={refEmail} onChange={validateEmail} type="text" placeholder="Ingrese su dirección de email..." required />
              </Form.Group>

              <Form.Group className="mb-3 mt-3" controlId="formConfEmail">
                <Form.Label>Confirme email</Form.Label>
                <Form.Control ref={refConfEmail} onChange={validateEmail} type="text" placeholder="Confirme su dirección de email..." required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formAddress">
                <Form.Label>Direccion de envío</Form.Label>
                <Form.Control ref={refAddress} type="address" placeholder="Ingrese su dirección..." required />
              </Form.Group>

              <Button disabled={!validEmail} variant="primary" type="submit">
                Confirmar pedido
              </Button>
            </Form>
          </Col>
          <Col className='pe-0'>
            <Row >
              <Col></Col>
              <Col>Descripcion</Col>
              <Col>Cantidad</Col>
              <Col>Total</Col>
            </Row>
            {
              carrito.map(product => {
                return (
                  <CheckoutCardItem key={product.id} {...product} />
                )
              })
            }
          </Col>
        </Row>
      </Container>
    )
}

export default Checkout