import React from 'react'
import { FormContext } from './FormContext'

const Result = ({ total }) => {
  const { score } = React.useContext( FormContext )

  return (
    <p>Voce acertou { score } de { total } questões!</p>
  )
}

export default Result
