import React from 'react'
import { GlobalContext } from './GlobalStorage'

const Produto = () => {
  const global = React.useContext( GlobalContext )

  return (
    <div>
      { global.produtos && global.produtos.map(({ nome, preco }) => (
        <>
        <h1>{ nome }</h1>
        <p>{ preco }</p>
        </>
      ))}
      <button onClick={ global.fetchProduto }>Buscar</button>
      <button onClick={ global.limparDados }>Limpar</button>
    </div>
  )
}

export default Produto