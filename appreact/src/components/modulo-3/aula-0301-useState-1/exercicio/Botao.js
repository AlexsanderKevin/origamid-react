import React from 'react'

const Botao = ({ children, onClick }) => {

  return (
    <button 
      onClick={ onClick }
      style={{marginRight: '20px'}}
      >
      { children }
    </button>
  )
}

export default Botao;
