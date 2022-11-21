import {React} from 'react';
import { Row } from 'react-bootstrap'
import ItemCard from '../ItemCard/ItemCard'

export const ItemList = ({products}) => {
    return (
        <Row>
            {
                products.map(product => {
                    return ( 
                        <ItemCard key={product.id} {...product} />
                    )
                })
            }
        </Row>

    )
}

export default ItemList