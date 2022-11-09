import Products from "../Utils/ProductList.json"

export const generatePromise = (task, time = 2000) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(task)
        }, time)
    })
}

export const fetchProducts = () => generatePromise(Products)

export const fetchProductsByCat = (cat) => {
    return generatePromise(Products.filter(product => product.categories === cat))
}

export const fetchProductsById = (id) => {
    return generatePromise(Products.find(product => product.id === id))
}