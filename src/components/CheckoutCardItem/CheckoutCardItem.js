import React from 'react'
import { Col, Row, Image } from 'react-bootstrap'
import { formatNumber } from '../Utils/FetchProducts'
import './CheckoutCardItem.css'


const CheckoutCardItem = ({ id, description, price, stock, img, amount }) => {
  return (
      <Row className = 'card__Row'>
            <Col className>
              <Image src={img} />
            </Col>
            <Col>
              <Row> {description} </Row> 
            </Col>
            <Col>{amount}</Col>
            <Col>$ {formatNumber(price * amount)}</Col>
      </Row>
  )
}

export default CheckoutCardItem