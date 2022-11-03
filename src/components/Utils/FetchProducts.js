import Products from "../Utils/ProductList.json"

export const fetchProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(Products)
        }, 2000)
    })
}

export const fetchProductsByCat = (cat) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(Products.filter((product => {
                return product.categories === cat
            })))
        }, 2000)
    })
}

export const fetchProductsById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(Products.find((product => { 
                return product.id === id
             })))
        },2000)
    })
}