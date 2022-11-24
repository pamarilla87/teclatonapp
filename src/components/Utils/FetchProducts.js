import { db } from "./Firebase";
import { getDocs, collection, where, query, getDoc, doc, addDoc, serverTimestamp   } from "firebase/firestore";


export const generatePromise = (task, time = 2000) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(task)
        }, time)
    })
}

export const fetchProductsInCart = (carrito) => {
    return generatePromise(carrito)
}

export const formatNumber = (q) => {
    return new Intl.NumberFormat("en-US").format(q)
}

export const cartTotal = (products) => {
    return products.reduce((total, sub) => {
        return total + sub.amount * sub.price
    }, 0)
}

export const fetchProductsByCategory = (catId) => {
    const productsCollection = collection(db, "productos")
    const filtro = (typeof catId === 'undefined') ? query(productsCollection, where("categories", "!=", '')) : query(productsCollection, where("categories", "==", catId))
    return getDocs(filtro)
}

export const fetchProductsByIds = (id) => {
    const productsCollection = collection(db, "productos")
    const refe = doc(productsCollection, id) 
    return getDoc(refe)

}

export const submitOrder = (customer, cart) => {
    const newCart = cart.map(({stock, img, categories, ...rest}) => rest)
    const orden = {
        buyer: customer,
        products: newCart,
        orderTotal: cartTotal(cart),
        date: serverTimestamp()        
    }
    const ordersCollection = collection(db, "orders")
    return addDoc(ordersCollection,orden)

}