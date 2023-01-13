import React from 'react'

function funcaoLenta() {
    let count = 0;
    for( let i = 0; i < 10000000000; i++ ) {
        count += i /32 * 12
    }
    return count;
}

function App() {
    const [ contar, setContar ] = React.useState(0)
    const memoValor = React.useMemo( funcaoLenta, [])

    const handleClick = React.useCallback(() => {
        setContar( contar => contar +1)
    }, [])

    return (
        <button 
            onClick={ handleClick }
        >Contar { contar }</button>
    )
}

export default App
