import React from 'react';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import ItemListContainer from './components/ItemListContainer'

function App() {
  return (
    
    <>
        <SearchBar />
        <NavBar nombre="Pablo"/>
        <ItemListContainer nombre="Pablo" />
    </>

  )
}

export default App