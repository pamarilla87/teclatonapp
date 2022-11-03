import React from 'react'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'
import UnderConstruction from '../UnderConstruction/UnderConstruction'
import NotFound from '../NotFound/NotFound'
import {Route, Routes} from "react-router-dom"
import "./Main.css"

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
            <Route path='/cart' element={<UnderConstruction />} />
            <Route path='/products' element={<ItemListContainer />} />
            <Route path='/help' element={<UnderConstruction />} />
            <Route path='/categories/:catId' element={<ItemListContainer />} />
            <Route path='/item/:itemId' element={<ItemDetailContainer />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    </main>
  )
}

export default Main