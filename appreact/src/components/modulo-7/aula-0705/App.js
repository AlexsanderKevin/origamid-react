import React from 'react'
import Produtos from './Produto'

const App = () => {
  const [ ativar, setAtivar ] = React.useState(true)

  return (
    <div>
      { ativar && 
        <Produtos titulo="estes são os produtos"/>
      }
      <button onClick={() => setAtivar( !ativar )}>ativar</button>
    </div>
  )
}

export default App
