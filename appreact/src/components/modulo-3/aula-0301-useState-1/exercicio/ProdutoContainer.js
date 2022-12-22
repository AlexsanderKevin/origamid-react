import React from 'react'
import Card from './Card'

const ProdutoContainer = ({ produto }) => {
  return (
    produto ? 
    <div>
        {produto.loading ?
          <p>Carregando ...</p>
          :
          <Card produto={ produto } />
        }
    </div>
    : null
  )
}

export default ProdutoContainer
