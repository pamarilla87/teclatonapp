import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchProductsByIds } from '../Utils/FetchProducts'
import LoadingScreen from '../LoadingScreen/LoadingScreen'
import ItemDetails from '../ItemDetails/ItemDetails'
import { Container } from 'react-bootstrap'
import "./ItemDetailContainer.css"

const ItemDetailContainer = () => {

    const [producto, setProductos] = useState([])

    const { itemId } = useParams()

    useEffect(() => {
        fetchProductsByIds(itemId)
            .then((resultado) => {
                const productos = {...resultado.data(), id: itemId}
                setProductos(productos)
            })
            .catch((error) => {
                console.log(error)
            })

    }, [itemId])


    return (
        <Container className="itemsDetContainer">
            {
                producto?.length <= 0 ? <LoadingScreen /> : <ItemDetails product={producto} />
            }
        </Container>
    )
}

export default ItemDetailContainer