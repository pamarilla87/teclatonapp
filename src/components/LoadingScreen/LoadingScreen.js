import logo from './logo.svg'
import React from 'react';
import './LoadingScreen.css'

const LoadingScreen = ({message}) => {
    return (
        <div className="loadingScreen">
            <img src={logo} className="App-logo" alt="logo-spinner" />
            <h1>Cargando {message}...</h1>
        </div>
    )
}

export default LoadingScreen;