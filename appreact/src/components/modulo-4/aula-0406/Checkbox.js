import React from 'react'

const Checkbox = ({ value, setValue, options, ...props }) => {
  const handleChange = ({ target }) => {
    if ( target.checked ) {
      setValue([ ...value, target.value ])
    } 
    else {
      setValue( value.filter( option => option !== target.value ))
    }
  }

  return (
    <>
    { options.map( option => (
      <label key={ option }>
        <input
          type='checkbox'
          value={ option }
          onChange={ handleChange }
          checked={ value.includes( option ) }
        />
        { option }
      </label>
    ))}
    </>
  )
}

export default Checkbox
