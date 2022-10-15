import React from 'react'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './CartWidget.css'

const CartWidget = (props) => {
    const { productos = "0" } = props
    return (
        <>
            <div>
                <FontAwesomeIcon className="cartIcon fa-lg" icon={faCartShopping} />
                <div className='numberProducts'>{productos}</div>
            </div>
        </>
    )
}

export default CartWidget