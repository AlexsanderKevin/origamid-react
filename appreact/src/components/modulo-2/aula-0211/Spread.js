import React from 'react'

const Spread = ({ label, id, ...props}) => {
  return (
    <>
        <label htmlFor={ id }>{ label }</label>
        <input id={ id } { ...props } />
    </>
  )
}

export default Spread