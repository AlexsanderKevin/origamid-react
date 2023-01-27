import React from 'react'

const Input = ({ name, id, ...props }) => {
  return (
    <>
      <label htmlFor={ id }>{ name }</label>
      <input
        id={ id }
        name={ name }
        { ...props }
      />
    </>
  )
}

export default Input
