import React from "react";
import listaProdutos from "../produtos"
import Card from "../components/Card";

const Produtos = () => {
    return (
        <section>
            {listaProdutos
            .map(({ nome, propriedades}) => (
                <Card key={ nome + '_card' } nome={ nome } propriedades={ propriedades }/>
            ))}
        </section>
    )
}

export default Produtos;
