import React from 'react'

const Select = ({ options, setValue, ...props }) => {
  return (
    <select 
      onChange={(({ target }) => setValue( target.value )) }
      { ...props }
    >
      <option value="" disabled>Selecione</option>
      { options.map( option => (
        <option key={ option } >{ option }</option>
      ))}
    </select>
  )
}

export default Select
