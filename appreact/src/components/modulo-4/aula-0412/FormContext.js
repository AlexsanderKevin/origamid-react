import React from 'react'

export const FormContext = React.createContext()

export const FormScore = ({ children }) => {
  const [ score, setScore ] = React.useState(0)

  return (
    <FormContext.Provider
      value={{ score, setScore }}
    > 
      { children }
    </FormContext.Provider>
  )
}
