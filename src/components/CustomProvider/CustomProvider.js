import React, { createContext, useState } from 'react'
import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';


const customContext = createContext()
const { Provider } = customContext

export const CustomProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([])
    const [count, setCount] = useState(0);

    const successToast = (message) => {
        toast.success(message, {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    }

    const failedToast = (message) => {
        toast.error(message, {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    }

    const addProductToCart = (product, number) => {
        const inCart = carrito.find((productInCart) => productInCart.id === product.id)
        if (inCart) {
            setCarrito(carrito.map((productInCart) => {
                if (productInCart.id === product.id) {
                    return { ...inCart, amount: inCart.amount + number }
                } else return productInCart
            }))
        } else {
            setCarrito([...carrito, { ...product, amount: number }])
        }
        successToast('Producto/s agregado/s!')
    }

    const removeProductFromCart = (product) => {
        const inCart = carrito.find((productInCart) => productInCart.id === product.id)
        if (inCart.amount === 1) {
            setCarrito(carrito.filter((productInCart) => productInCart.id !== product.id))
        } else {
            setCarrito((productInCart) => {
                if (productInCart.id === product.id) {
                    return { ...inCart, amount: inCart.amount - 1 }
                } else return productInCart
            })
        }
        failedToast('Producto/s removido/s!')
    }

    const removeAllProductFromCart = (product) => {
        const inCart = carrito.find((productInCart) => productInCart.id === product.id)
        if (inCart) {
            setCarrito(carrito.filter((productInCart) => productInCart.id !== product.id))
        }
        failedToast('Producto/s removido/s!')
    }

    const emptyCart = () => {
        setCarrito([])
    }


    return (
        <Provider value={{ carrito, removeProductFromCart, addProductToCart, count, setCount, removeAllProductFromCart, emptyCart }}>
            {children}
        </Provider>
    )
}

export default customContext