import React from 'react'

const Produto = ({ produto }) => {
  return (
    <div>
      <h1>{ produto.nome }</h1>
      { produto.preco && <p>R$ { produto.preco }</p> }
    </div>
  )
}

export default Produto