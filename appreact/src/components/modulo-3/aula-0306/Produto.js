import React from 'react'
import useLocalStorage from './UseLocalStorage'

const Produto = () => {
  const [ produto, setProduto ] = useLocalStorage( 'produto', '' )

  function handleClick({ target }){
    setProduto( target.innerText )
  }

  return (
    <div>
      <h1>{ produto }</h1>
      <button onClick={ handleClick }>Smartphone</button>
      <button onClick={ handleClick }>Notebook</button>
    </div>
  )
}

export default Produto