import React from 'react'

const Titulo = <h1>Talala</h1> 

const App = () => {
	const nome = 'Kevin';

  const desconto = 10;
  const preco = 20;

  const ativo = false;

  return (
  <>
    {Titulo}
    <label htmlFor="nome">Nome</label>
    <input type="text" id="nome" />

    <video autoPlay />
	  <p>{nome}</p>
	  <p>{preco - desconto}</p>

    <p className={ativo ? 'active': 'inactive'}>Estoque</p>
  </>
  )
}

export default App;
