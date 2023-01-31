import React from 'react'
import Input from './Input';
import useForm from './useForm';

const App = () => {
  const cep = useForm( 'cep' )
  const email = useForm( 'email' )
  const nome = useForm( 'nome' )

  const handleSubmit = event => {
    event.preventDefault()

    if ( cep.validate() && email.validate() && nome.validate() ) {
      console.log('Enviou')

    } else {
      console.log('Não enviou')
    }
  }

  return (
    <form onSubmit={ handleSubmit }>
      <Input
        name='Cep'
        id='cep'
        type='text'
        placeholder='99999-999'
        { ...cep }
      />

      <Input
        name='Email'
        id='email'
        type='email'
        { ...email }
      />

      <Input
        name='Nome'
        id='nome'
        type='text'
        { ...nome }
      />
      <button>Enviar</button>
    </form>
  )
}

export default App
