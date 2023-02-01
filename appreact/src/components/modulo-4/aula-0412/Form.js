import React from 'react'
import { FormContext } from './FormContext'

const Form = ({ 
  currentQuestion, 
  setCurrentQuestion, 
  questionNumber,
  ...props 
}) => {

  const { question, options, id, response } = currentQuestion
  const [ value, setValue ] = React.useState()
  const { score, setScore } = React.useContext( FormContext )

  const handleSubmit = event => {
    event.preventDefault()
    if ( value === response ) {
      setScore( score + 1 )
    }
    setCurrentQuestion( questionNumber + 1 )
  }

  const handleChange = ({ target }) => setValue( target.value )

  return (
    <form onSubmit={ handleSubmit }>
      <fieldset style={{ padding: '20px' }}>
        <legend>
          <b>{ question }</b>
        </legend>

        { options.map( opt => (
          <label key={ opt } style={{ marginBottom:'15px' }}>
            <input 
              type='radio' 
              name={ id }
              value={ opt }
              onChange={ handleChange }
            />
            { opt }
          </label>
        ))}
      </fieldset>

      <button style={{ marginTop: '15px' }}>Próxima</button>
    </form>
  )
}

export default Form
