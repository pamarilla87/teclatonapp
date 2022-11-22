import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container"
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import ItemList from "../ItemList/ItemList";
import { useParams } from 'react-router-dom'
import './ItemListContainer.css'
import { fetchProductsByCategory } from "../Utils/FetchProducts";

const ItemListContainer = () => {

    const [productos, setProductos] = useState([])

    const { catId } = useParams()

    useEffect(() => {
        setProductos([])
        fetchProductsByCategory(catId)
            .then((resultado) => {
                const productos = resultado.docs.map(doc => ({ ...doc.data(), id: doc.id }))
                setProductos(productos)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [catId])

    return (
        <Container className="itemsContainer"> {
            productos?.length <= 0 ? <LoadingScreen message={'productos'} /> : <ItemList products={productos} />
        }
        </Container>
    )
}

export default ItemListContainer