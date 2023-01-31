import React from 'react'

const types = {
  cep: {
    regex: /^\d{5}-?\d{3}$/,
    message: 'Cep inválido'
  },
  email: {
    regex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    message: 'Email invalido'
  }
}

const useForm = type => {
  const [ value, setValue ] = React.useState('')
  const [ error, setError ] = React.useState( null )

  const validate = value => {
    const regex = types[ type ] ? types[ type ].regex : null
    const message = types[ type ] ? types[ type ].message : null
    let isValid = false

    if ( value.length === 0 ) {
      setError( 'Preencha um valor' )

    } else if ( types[ type ] && !regex.test( value ) ) {
      setError( message )

    } else {
      setError( null )
      isValid = true
    }
   
    return isValid
  }

  const onChange = ({ target }) => {
    if ( error ) validate( target.value )
    setValue( target.value )
  }

  return {
    value,
    setValue,
    error,
    onChange,
    onBlur: () => validate( value ),
    validate: () => validate( value )
  }
}

export default useForm