import React from 'react'
import styled from 'styled-components'

const Titulo = styled.h1`
  font-size: 2rem;
  color: tomato;
  &:hover {
    background: black;
    color: white;
  }
  &::before {
    display: block;
    content: '';
  }
`

const Paragrafo = styled.p`
  background-color: ${({ativo}) => (ativo ? '#53d956' : '#000') };
  font-size: 1.5rem;
  color: green;
`

const App = () => {
  const [ ativo, setAtivo ] = React.useState( true )

  return (
    <>
    <Titulo>Meu titulo</Titulo>
    <Paragrafo ativo={ ativo }>
      loremaodfnao haodg haopdgh aodgh oadgh oauidgoah dgoadh
    </Paragrafo>
    <button onClick={() => setAtivo( !ativo )}>Toggle</button>
    </>
  )
}

export default App
