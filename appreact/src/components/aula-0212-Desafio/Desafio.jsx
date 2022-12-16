import React from 'react';
import Header from './components/Header';
import Home from './views/Home';
import Produtos from './views/Produtos';

const Desafio = () => {

    const viewPath = window.location.href

    return (
        <>
            <Header/>
            { viewPath.endsWith('/produtos') ? <Produtos/> : <Home/> }
        </>
    );
}

export default Desafio;