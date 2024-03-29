import React from 'react'
import useFetch from './useFetch'

const App = () => {
  const { data, loading, error, request } = useFetch()

  React.useEffect(() => {
    request( 'https://ranekapi.origamid.dev/json/api/produto/notebook' )
  }, [ request ])

  if ( error ) return <p>Erro</p> 
  if ( loading ) return <p>Carregando...</p>
  if ( data ) return <div>{ data.nome }</div>
  else return null
}

export default App