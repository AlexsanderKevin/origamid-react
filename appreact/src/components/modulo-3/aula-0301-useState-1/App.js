import React from "react";

const App = () => {
    const [ ativo, setAtivo ] = React.useState(true)
    const [ dados, setDados ] = React.useState({ nome: 'Kevin', idade: 20 })

    function handleClick() {
        setAtivo(!ativo);
        setDados({...dados, faculdade: 'Sim'})
    }

    return (
        <>
        <p>{dados.nome}</p>
        <p>{dados.idade}</p>
        <p>{dados.faculdade}</p>
        <button onClick={handleClick} disabled={!ativo}>{ativo? "Ativo": "Inativo"}</button>
        </>
    );
};

export default App;
