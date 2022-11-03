import React from 'react'
import {Card, Col} from 'react-bootstrap'


const ItemDetails = (props) => {
    console.table(props)
    return (
        <Col  className="itemsCols">
            {
                <Card  className="cardContainer"  >
                    <Card.Img variant="top" src={props.img} />
                    <Card.Body>
                        <Card.Title>$ {props.price}</Card.Title>
                        <Card.Text>{props.description}</Card.Text>
                        {/* <ItemCount /> */}
                    </Card.Body>
                </Card>
            }
        </Col>
    )
}

export default ItemDetails