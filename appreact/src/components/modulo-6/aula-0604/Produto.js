import React from 'react'
import { NavLink, Outlet, Route, Routes, useLocation, useParams } from 'react-router-dom'
import ProdutoAvaliacao from './ProdutoAvaliacao'
import ProdutoCustomizado from './ProdutoCustomizado'
import ProdutoDescricao from './ProdutoDescricao'

const Produto = () => {
  const params = useParams()

  return (
    <>
    <h1>Produto:</h1>
    <p>{ params.id }</p>

    <nav>
      <NavLink to='' end>Descrição</NavLink>
      <NavLink to='avaliacao'>Avaliação</NavLink>
      <NavLink to='customizado'>Customizado</NavLink>
    </nav>

    <Outlet />
    </>
  )
}

export default Produto
