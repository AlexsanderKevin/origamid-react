import React from 'react'
import Produto from './Produto'

const Exercicio0302 = () => {
  const [ preferencia, setPreferencia ] = React.useState(localStorage.getItem("produto"))
  const [ produto, setProduto ] = React.useState({})

  function fetchProduto( prod ) {
    fetch(`https://ranekapi.origamid.dev/json/api/produto/${ prod }`)
      .then( data => data.json() )
      .then( json => setProduto( json ))
  }

  function storePreferencia( pref ) {
    setPreferencia( pref )
    localStorage.setItem('produto', pref)
  }

  React.useEffect(() => { preferencia && fetchProduto( preferencia ) }, [ preferencia ])

  return (
    <div>
      <h1>Preferência: { preferencia }</h1>
      <button onClick={() => storePreferencia( 'smartphone' )} style={{marginRight: '20px'}}>Smartphone</button>
      <button onClick={() => storePreferencia( 'notebook' )}>Notebook</button>
      <Produto produto={ produto }/>
    </div>
  )
}

export default Exercicio0302