import React, {useContext, useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './ItemCount.css'
import { Button, Form, } from 'react-bootstrap'
import customContext from '../CustomProvider/CustomProvider'

const ItemCount = ({stock}) => {

    const {setCount} = useContext(customContext)
    const [contador, setContador] = useState(1)

    const handleDecrement = () => {
        if (contador > 1) {
            setContador(contador - 1)   
        }
    }

    const handleIncrement = () => {
        if (contador < stock )
        setContador(contador + 1)
    } 

    useEffect(() => {
        setCount(contador)
    }, [contador, setCount] )


    return (
            <Form.Group className="cart-input">
                <Button onClick={handleDecrement} className="decreaseButton" variant="primary">-</Button>
                <span className="numberOfItems">{contador}</span>
                <Button onClick={handleIncrement} className="increaseButton" variant="primary">+</Button>
            </Form.Group>
            
    )
}

export default ItemCount