import React from 'react'
import Checkbox from './Checkbox'
import Input from './Input'
import Radio from './Radio'
import Select from './Select'

const App = () => {
  const [ nome, setNome ] = React.useState('')
  const [ email, setEmail ] = React.useState('')
  const [ produto, setProduto ] = React.useState('')
  const [ cor, setCor ] = React.useState('Azul')
  const [ linguagens, setLinguagens ] = React.useState([])
  
  return (
    <form>
      <Input name="Nome" id="nome" type="text" required value={ nome } setValue={ setNome }/>
      <Input name="Email" id="email" type="email" required value={ email } setValue={ setEmail }/>
      <Select options={[ "Smartphone", "Notebook" ]} value={ produto } setValue={ setProduto }/>
      <Radio name="cores" options={[ "Azul", "Vermelho" ]} value={ cor } setValue={ setCor } />
      <Checkbox options={[ "Javascript", "C#", "Python" ]} value={ linguagens } setValue={ setLinguagens } />

      <button>Enviar</button>

      { nome && <p>{ nome }</p> }
      { email && <p>{ email }</p> }
      { produto && <p>{ produto }</p> }
      { cor && <p>{ cor }</p> }
      { linguagens && linguagens.map( linguagem => <p key={ linguagem }>{ linguagem }</p>)}
    </form>
  )
}

export default App
