import React from 'react'

const OrderConfirmation = ({order, customer}) => {
  return (
    <div>
        <h1> Pedido confirmado, su id de orden es {order} </h1>
        <h2> Gracias {customer.name} por comprar con nosotros. </h2>
        <h2> Una copia del recibo y detalle de compra se ha enviado a {customer.email}</h2>
    </div>  
  )
}

export default OrderConfirmation