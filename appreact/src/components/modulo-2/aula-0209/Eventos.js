const Eventos = () => {
    function handleClick( event ) {
        alert( 'Comprou: ' + event.target.innerText )
    }

    function handleScroll( event ) {
        console.log( event )
    }

    window.addEventListener( 'scroll', handleScroll)

    return (
        <>
            <button onClick={ () => alert( 'comprou bermuda' ) }> Bermuda </button>
            <button onClick={ handleClick }> Camisa </button>
        </>
    )
}

export default Eventos
