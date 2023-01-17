import React from 'react'
import { GlobalContext } from './GlobalStorage'

const Produto = () => {
 const storage = React.useContext(GlobalContext)

  return (
    <div>Total: { storage.carrinho }: <button onClick={ () => storage.adicionarCarrinho() }>Adicionar</button></div>
  )
}

export default Produto
