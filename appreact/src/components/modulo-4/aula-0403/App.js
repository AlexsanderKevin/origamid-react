import React from 'react'

const App = () => {
  const [ produto, setProduto ] = React.useState('')

  return (
    <>
    <select onChange={ ({ target }) => setProduto( target.value )}>
      <option disabled value="">Selecione</option>
      <option value='notebook'>Notebook</option>
    </select>
    { produto }
    </>
  )
}

export default App
