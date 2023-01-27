import React from 'react'
import Input from './Input'

const App = () => {
  return (
    <form>
      <Input 
        name="Nome" 
        id="nome" 
        type="text" 
        required
      />
      <Input 
        name="Email" 
        id="email" 
        type="email" 
        required
      />
      <button>Enviar</button>
    </form>
  )
}

export default App
