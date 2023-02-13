import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import Home from './Home'
import Produto from './Produto'
import ProdutoAvaliacao from './ProdutoAvaliacao'
import ProdutoCustomizado from './ProdutoCustomizado'
import ProdutoDescricao from './ProdutoDescricao'
import Sobre from './Sobre'

const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path='sobre' element={ <Sobre/> } />
        <Route path='produto/:id' element={ <Produto/> }>
          <Route path='/' element={ <ProdutoDescricao/> } />
          <Route path='avaliacao' element={ <ProdutoAvaliacao /> } />
          <Route path='customizado' element={ <ProdutoCustomizado /> } />
        </ Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
