import React from 'react'
import Botao from './Botao'
import ProdutoContainer from './ProdutoContainer'

const Exercicio = () => {
  const [ produto, setProduto ] = React.useState(null)

  function fetchProduto( prod ) {
    setProduto({ loading: true })

    fetch(`https://ranekapi.origamid.dev/json/api/produto/${ prod }`)
      .then( response => response.json() )
      .then( json => setProduto( json ))
  }

  return (
    <>
    <Botao onClick={ () => fetchProduto('tablet') }>Tablet</Botao>
    <Botao onClick={ () => fetchProduto('smartphone') }>Smartphone</Botao>
    <Botao onClick={ () => fetchProduto('notebook') }>Noteboook</Botao>

    <ProdutoContainer produto={ produto }/>
    </>
  )
}

export default Exercicio