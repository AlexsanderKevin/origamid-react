import React from 'react'
import Dados02 from './Dados02'

const Dados01 = () => {
  const logado = true
  const nome = 'Kevin'

  return (
    <section> 
        <Dados02 logado={ logado } nome={ nome }></Dados02>
    </section>
  )
}

export default Dados01