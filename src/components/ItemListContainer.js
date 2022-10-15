import React from "react";
import Container from "react-bootstrap/Container"
import './ItemListContainer.css'

const ItemListContainer = (props) => {
    const {nombre="Invitado"} = props;
    return (
        <>
            <Container className="itemContainer">
                <div>Greetings {nombre} </div>
            </Container>
        </>
    )
}

export default ItemListContainer