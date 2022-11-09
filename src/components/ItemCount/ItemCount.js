import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './ItemCount.css'
import { Button, Form, } from 'react-bootstrap'

const ItemCount = ({stock, count, setCount}) => {

    const handleDecrement = () => {
        if (count > 1) {
            setCount(count - 1)   
        }
    }

    const handleIncrement = () => {
        if (count < stock )
            setCount(count + 1)
    } 


    return (
            <Form.Group className="cart-input">
                <Button onClick={handleDecrement} className="decreaseButton" variant="primary">-</Button>
                <span className="numberOfItems">{count}</span>
                <Button onClick={handleIncrement} className="increaseButton" variant="primary">+</Button>
            </Form.Group>
            
    )
}

export default ItemCount