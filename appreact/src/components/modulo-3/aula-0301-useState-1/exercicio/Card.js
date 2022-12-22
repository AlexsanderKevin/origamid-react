import React from 'react'

const Card = ({ produto }) => {
  return (
    <>
    <h1>{ produto.nome }</h1>
    <p>R$ { produto.preco },00</p>
    <img src={ produto.fotos[0].src }/>
    </>
  )
}

export default Card
