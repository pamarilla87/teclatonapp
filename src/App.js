import React from 'react';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import ItemListContainer from './components/ItemListContainer'

function App() {
  return (
    // Move Search and NavBar to a single Header component
    <>
        <SearchBar />
        <NavBar nombre="Pablo"/>
        <ItemListContainer nombre="Pablo" />
    </>

  )
}

export default App