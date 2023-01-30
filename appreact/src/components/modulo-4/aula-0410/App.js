import React from 'react'
import Input from './Input';

const App = () => {
  const [ cep, setCep ] = React.useState();
  const [ error, setError ] = React.useState();

  const validateCep = value => {
    const regex = /^\d{5}-?\d{3}$/
    let isValid = false

    if ( value.length === 0 ) {
      setError( 'Digite o CEP' )

    } else if ( !regex.test( value ) ) {
      setError( 'Digite um CEP válido' )

    } else {
      setError( null )
      isValid = true
    }
   
    return isValid
  }

  const handleBlur = ({ target }) => {
    validateCep( target.value )
  }

  const handleChange = ({ target }) => {
    if ( error ) validateCep( target.value )
    setCep( target.value )
  }

  const handleSubmit = event => {
    event.preventDefault()

    if ( validateCep( cep ) ) {
      console.log('Enviou')

    } else {
      console.log('Não enviou')
    }
  }

  return (
    <form onSubmit={ handleSubmit }>
      <Input
        name='Cep'
        placeholder='99999-999'
        onBlur={ handleBlur }
        onChange={ handleChange }
      />
      { error && <p>{ error }</p> }

      <button>Enviar</button>
    </form>
  )
}

export default App
