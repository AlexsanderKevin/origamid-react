import React from 'react'

const App = () => {
  const [ nome, setNome ] = React.useState('');

  function handleSubmit( event ) {
    event.preventDefault();
  }

  return (
    <form onSubmit={ handleSubmit }>
      <label htmlFor='nome'>Nome</label>
      <input 
        id="nome"
        type="text"
        value={ nome }
        onChange={ event => setNome( event.target.value )}
      />
      <button>Enviar</button>
    </form>
  )
}

export default App
