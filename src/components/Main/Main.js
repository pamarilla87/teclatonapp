import React from 'react'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'
import Help from '../Help/Help'
import {Route, Routes} from "react-router-dom"
import "./Main.css"

const Main = () => {
  return (
    <main>
        <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/teclatonapp' element={<ItemListContainer />} />
            <Route path='/products' element={<ItemListContainer />} />
            <Route path='/help' element={<Help />} />
            <Route path='/categories/:catId' element={<ItemListContainer />} />
            <Route path='/items/:itemId' element={<ItemDetailContainer />} />
        </Routes>
    </main>
  )
}

export default Main