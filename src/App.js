import React from 'react';
import Header from './components/Header/Header'
import Main from './components/Main/Main';
import { BrowserRouter } from "react-router-dom"
import { CustomProvider } from './components/CustomProvider/CustomProvider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Apps.css'

function App() {

  return (
    <CustomProvider>
      <BrowserRouter>
        <ToastContainer/>
        <Header />
        <Main />
      </BrowserRouter>
    </CustomProvider>
  )
}

export default App