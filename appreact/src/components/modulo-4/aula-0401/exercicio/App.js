import React from 'react'

const formFields = [
  { id: 'nome', nome: 'Nome', type:'text' },
  { id: 'email', nome: 'E-mail', type:'email' },
  { id: 'senha', nome: 'Senha', type:'password' },
  { id: 'cep', nome: 'Cep', type:'text' },
  { id: 'rua', nome: 'Rua', type:'text' },
  { id: 'numero', nome: 'Numero', type:'text' },
  { id: 'bairro', nome: 'Bairro', type:'text' },
  { id: 'cidade', nome: 'Cidade', type:'text' },
  { id: 'estado', nome: 'Estado', type:'text' },
]

const App = () => {
  const [ form, setForm ] = React.useState(
    formFields.reduce(( acc, field ) => ({...acc, [ field.id ]: ''}), {})
  )
  const [ status, setStatus ] = React.useState()

  const postForm = () => {
    fetch('https://ranekapi.origamid.dev/json/api/usuario', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify( form )
    })
    .then(({ status }) => setStatus( status ))
  }

  const handleChange = ({ target }) => {
    const { id, value } = target
    setForm({ ...form, [ id ]: value })
  }

  const handleSubmit = event => {
    event.preventDefault()
    postForm()
  }

  return (
    <>
    <form onSubmit={ handleSubmit }>
      { formFields.map( ({ id, nome, type }) => (
        <input  key={ id }
          onChange={ handleChange } 
          id={ id } 
          placeholder={ nome } 
          type={ type } 
          value={ form[ id ] }/>
      ))}

      <button>Enviar</button>
    </form>

    { status === 200 && <p>usuario criado</p> }
    </>
  )
}

export default App
