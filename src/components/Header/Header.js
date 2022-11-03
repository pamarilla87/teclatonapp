import React from 'react';
import NavBar from '../Navbar/NavBar';
import SearchBar from '../SearchBar/SearchBar';

const Header = () => {
  return (
    // Move Search and NavBar to a single Header component
    <header>
        <SearchBar />
        <NavBar nombre="Pablo"/>
    </header>
  )
}

export default Header