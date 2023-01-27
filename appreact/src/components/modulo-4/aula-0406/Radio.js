import React from 'react'

const Radio = ({ options, value, setValue, name, ...props }) => {
  return (
    <>
    { options.map( opt => (
      <label key={ opt } name={ name }>
        <input
          type='radio'
          value={ opt }
          checked={ value === opt }
          onChange={({ target }) => setValue( target.value )}
          { ...props }
        />
        { opt }
      </label>
    ))}
    </>
  )
}

export default Radio
