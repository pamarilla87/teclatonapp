import React, { createContext, useState, useEffect } from 'react'

const customContext = createContext()
const { Provider } = customContext

export const CustomProvider = ({children}) => {
    const [carrito, setCarrito] = useState([])
    
    useEffect(() => {
        console.table(carrito)
    }, [carrito]) 


    const addProductToCart = (product, number) => {
        const inCart = carrito.find((productInCart) => productInCart.id === product.id)
        if (inCart) {
            setCarrito(carrito.map((productInCart) => {
                if (productInCart.id === product.id) {
                    return { ...inCart, amount: inCart.amount + number}
                } else return productInCart
            }))
        } else {
            setCarrito ([...carrito, {...product, amount: number}])
        }
    }

    const deleteProductFromCart = (product) => {
        const inCart = carrito.find((productInCart) => productInCart.id === product.id)
        if (inCart.amount === 1) {
            setCarrito(carrito.filter((productInCart) => productInCart.id !== product.id))
        } else {
            setCarrito((productInCart) => {
                if (productInCart.id === product.id) {
                    return {...inCart, amount: inCart.amount - 1}
                } else return productInCart
            })
        }
    }



    return (
        <Provider value={{carrito, deleteProductFromCart, addProductToCart }}>
            {children}
        </Provider>
    )
}

export default customContext