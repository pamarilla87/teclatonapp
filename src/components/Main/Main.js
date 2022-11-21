import React from 'react'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'
import UnderConstruction from '../UnderConstruction/UnderConstruction'
import NotFound from '../NotFound/NotFound'
import { Route, Routes } from "react-router-dom"
import "./Main.css"
import CartOverview from '../CartOverview/CartOverview'
import Checkout from '../Checkout/Checkout'
import OrderConfirmation from '../OrderConfirmation/OrderConfirmation'

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/teclatonapp' element={<ItemListContainer />} />
        <Route path='/history' element={<UnderConstruction />} />
        <Route path='/offers' element={<UnderConstruction />} />
        <Route path='/my-purchases' element={<UnderConstruction />} />
        <Route path='/favs' element={<UnderConstruction />} />
        <Route path='/products' element={<ItemListContainer />} />
        <Route path='/help' element={<UnderConstruction />} />
        <Route path='/categories/:catId' element={<ItemListContainer />} />
        <Route path='/item/:itemId' element={<ItemDetailContainer />} />
        <Route path='/cart' element={<CartOverview />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/order-confirmation' element={<OrderConfirmation />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </main>
  )
}

export default Main