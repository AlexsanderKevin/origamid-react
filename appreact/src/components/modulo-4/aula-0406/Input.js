import React from 'react'

const Input = ({ name, id, setValue, ...props }) => {
  return (
    <>
      <label htmlFor={ id }>{ name }</label>
      <input
        id={ id }
        name={ name }
        onChange={({ target }) => setValue( target.value )}
        { ...props }
      />
    </>
  )
}

export default Input
