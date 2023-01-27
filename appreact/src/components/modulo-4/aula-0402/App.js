import React from 'react'

const App = () => {
  const [ mensagem, setMensagem ] = React.useState('')

  return (
    <textarea
      id="mensagem"
      value={ mensagem }
      rows='5'
      onChange={ event => setMensagem( event.target.value )}
    />
  )
}

export default App
