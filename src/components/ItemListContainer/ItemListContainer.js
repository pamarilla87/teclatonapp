import React from "react";
import Container from "react-bootstrap/Container"
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import ItemList from "../ItemList/ItemList";
import {fetchProducts, fetchProductsByCat} from "../Utils/FetchProducts";
import { useEffect, useState } from "react";
import {useParams} from 'react-router-dom'
import './ItemListContainer.css'

const ItemListContainer = () => {

    const [productos, setProductos] = useState([])

    const {catId} = useParams()

    useEffect(() => {
        setProductos([])
        if (catId) {
            fetchProductsByCat(catId)
            .then (res => {setProductos(res)})
        }

        else {
            fetchProducts()
                .then(resultado => {setProductos(resultado)})

        }
    }, [catId])

    return (
        <Container className="itemsContainer"> {
            productos?.length <= 0 ? <LoadingScreen /> : <ItemList products={productos} />
        }
        </Container>
    )
}

export default ItemListContainer