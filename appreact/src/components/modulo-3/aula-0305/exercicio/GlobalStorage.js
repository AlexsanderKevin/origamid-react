import React from "react";

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [ produtos, setProdutos ] = React.useState();

  const fetchProduto = () => {
    fetch("https://ranekapi.origamid.dev/json/api/produto/")
      .then( res => res.json() )
      .then( json => setProdutos( json ))
  }

  const limparDados = () => setProdutos( null )

  return (
    <GlobalContext.Provider value={{ produtos, setProdutos, limparDados, fetchProduto }}>
      { children }
    </GlobalContext.Provider>
  )
}
