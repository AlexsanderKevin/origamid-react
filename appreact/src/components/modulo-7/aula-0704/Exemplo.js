import React from 'react'

const reducer = ( state, action ) => {
  switch ( action.type ) {
    case 'remover': return state.filter( item => item !== action.content );
    case 'adicionar' : return [ ...state, action.content ]
    default: throw new Error();
  }
}

const Exemplo = () => {
  const [ state, dispatch ] = React.useReducer( reducer, ['banana', 'uva'] )

  return (
    <div>
      <button onClick={() => dispatch({type: 'remover', content: 'banana'})}>Remover Banana</button>
      <button onClick={() => dispatch({type: 'adicionar', content: 'banana'})}>Adicionar Banana</button>
      { state }
    </div>
  )
}

export default Exemplo
