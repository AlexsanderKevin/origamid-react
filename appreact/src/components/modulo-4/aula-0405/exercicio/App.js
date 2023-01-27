import React from 'react'

const coresArray = ['azul', 'roxo', 'laranja', 'verde', 'vermelho', 'cinza'];

const App = () => {
  const [ check, setCheck ] = React.useState([ 'laranja', 'vermelho' ])

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
      { coresArray.map( cor => (
        <label key={ cor } style={{ textTransform: 'capitalize' }}>
          <input
            type='checkbox'
            value={ cor }
            checked={ check.includes( cor ) }
            onChange={ handleChange }
          />
          { cor }
        </label>
      ))}
    </form>
  )
}

export default App
