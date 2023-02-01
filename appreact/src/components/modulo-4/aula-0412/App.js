import React from 'react'
import Form from './Form'
import { FormScore, FormContext } from './FormContext'
import questions from './questions'
import Result from './Result'

const App = () => {
  const [ currentQuestion, setCurrentQuestion ] = React.useState(0)

  return questions[ currentQuestion ] !== undefined ? (
    <FormScore>
      <Form 
        currentQuestion={ questions[ currentQuestion ] } 
        setCurrentQuestion={ setCurrentQuestion }
        questionNumber={ currentQuestion }
      />
    </FormScore>
  ) : (
    <FormScore>
      <Result total={ questions.length }/>
    </FormScore>
  )

}

export default App
