import React from 'react'

const App = () => {
  const [ check, setCheck ] = React.useState([])

  console.log(check)

  const handleChange = ({ target }) => {
    if ( target.checked ) {
      setCheck([...check, target.value])
    }
    else {
      setCheck( check.filter( cor => cor !== target.value ))
    }
  }

  return (
    <form>
      <label>
        <input
          type='checkbox'
          value='verde'
          checked={ check.includes( 'verde' ) }
          onChange={ handleChange }
        />
        Verde
      </label>
      <label>
        <input
          type='checkbox'
          value='azul'
          checked={ check.includes( 'azul' ) }
          onChange={ handleChange }
        />
        Azul
      </label>
    </form>
  )
}

export default App
