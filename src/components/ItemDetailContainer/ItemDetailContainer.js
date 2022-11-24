import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchProductsByIds } from '../Utils/FetchProducts'
import LoadingScreen from '../LoadingScreen/LoadingScreen'
import ItemDetails from '../ItemDetails/ItemDetails'
import { Container } from 'react-bootstrap'
import "./ItemDetailContainer.css"

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState()

    const { itemId } = useParams()

    useEffect(() => {
        fetchProductsByIds(itemId)
            .then((resultado) => {
                const productos = { ...resultado.data(), id: itemId }
                setProducto(productos)                
            })
            .catch((error) => {
                console.log(error)
            })

    }, [itemId])


    return (
        !producto ? <LoadingScreen message='producto' /> : Object.keys(producto).length <= 1 ? <h1>El producto seleccionado no existe</h1> :
            (
                
                <Container className="itemsDetContainer">
                    <ItemDetails product={producto} />
                </Container>
            )
    )
}

export default ItemDetailContainer