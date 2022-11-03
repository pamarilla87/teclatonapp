import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchProductsById } from '../Utils/FetchProducts'
import LoadingScreen from '../LoadingScreen/LoadingScreen'
import ItemDetails from '../ItemDetails/ItemDetails'
import { Container } from 'react-bootstrap'
import "./ItemDetailContainer.css"

const ItemDetailContainer = () => {

    const [producto, setProductos] = useState([])

    const {itemId} = useParams()

    useEffect(() => {
        fetchProductsById(itemId)
        .then (result => setProductos(result))

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