import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

const Produto = () => {
  const params = useParams()
  const location = useLocation()
  const search = new URLSearchParams( location.search )
  console.log( search )

  return (
    <>
    <h1>Produto:</h1>
    <p>{ params.id }</p>
    </>
  )
}

export default Produto
