import React from 'react'

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [ carrinho, setCarrinho ] = React.useState(0)

  function adicionarCarrinho() {
    setCarrinho( car => car +1)
  }

  return (
    <GlobalContext.Provider 
      value={{ carrinho, adicionarCarrinho }}
    >
      { children }
    </GlobalContext.Provider>
  )
}
