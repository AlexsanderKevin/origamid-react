import React from 'react'

const App = () => {
  const [ radio, setRadio ] = React.useState()

  const handleChange =  ({ target }) => setRadio( target.value )

  return (
    <form>
      <label>
        <input
          type='radio'
          value='notebook'
          checked={ radio === 'notebook' }
          onChange={ handleChange }
          name="produto"
        />
        Notebook
      </label>
      <label>
        <input
          type='radio'
          value='smartphone'
          checked={ radio === 'smartphone' }
          onChange={ handleChange }
          name="produto"
        />
        Smartphone
      </label>
      { radio }
    </form>
  )
}

export default App
