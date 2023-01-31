import React from 'react'

const Input = ({ 
  name, 
  id, 
  onChange, 
  value, 
  type, 
  onBlur, 
  placeholder, 
  error 
}) => {

  return (
    <>
      <label htmlFor={ id }>{ name }</label>
      <input
        id={ id }
        name={ name }
        onChange={ onChange }
        onBlur={ onBlur }
        placeholder={ placeholder }
        type={ type }
        value={ value }
      />

      { error && <p>{ error }</p> }
    </>
  )
}

export default Input
