import React from 'react'

const Input = ( props ) => {
  return (
    <>
        <label for={ props.name }>{ props.name }</label>
        <input id={ props.name }/>
    </>
  )
}

export default Input