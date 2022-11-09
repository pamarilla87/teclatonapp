import React, {useContext, useEffect, useState} from 'react'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './CartWidget.css'
import customContext from '../CustomProvider/CustomProvider'
 

const CartWidget = () => {
    const {carrito} = useContext(customContext)
    const [cantidad, setCantidad] = useState(0)

    useEffect(() => {
        setCantidad(carrito.reduce((previous, current) => previous + current.amount, 0))
    }, [carrito])

    return (
        <>
            <div>
                <FontAwesomeIcon className="cartIcon fa-lg" icon={faCartShopping} />
                <div className='numberProducts'>{cantidad}</div>
            </div>
        </>
    )
}

export default CartWidget