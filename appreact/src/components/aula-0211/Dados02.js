import React from 'react'

const Dados02 = ({ logado, nome }) => {
  const color = logado ? 'green' : 'yellow'
  return (
    <h1 style={{ color: color }}>{ nome }</h1>
  )
}

export default Dados02