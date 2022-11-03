import React from 'react';
import Header from './components/Header/Header'
import Main from './components/Main/Main';
import {BrowserRouter} from "react-router-dom"

function App() {
  return (
    // Move Search and NavBar to a single Header component
    <BrowserRouter>
      <Header />
      <Main />
    </BrowserRouter>
  )
}

export default App