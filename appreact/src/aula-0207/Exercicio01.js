const luana = {
	cliente: 'Luana',
	idade: 27,
	compras: [
		{ nome: 'Notebook', preco: 'R$ 2500' },
		{ nome: 'Geladeira', preco: 'R$ 3000' },
		{ nome: 'Smartphone', preco: 'R$ 1500' },
	],
	ativa: true,
}

const mario = {
	cliente: 'Mario',
	idade: 31,
	compras: [
		{ nome: 'Notebook', preco: 'R$ 2500' },
		{ nome: 'Geladeira', preco: 'R$ 3000' },
		{ nome: 'Smartphone', preco: 'R$ 1500' },
		{ nome: 'Guitarra', preco: 'R$ 3500' },
	],
	ativa: false,
}

export default function Exercicio01() {
	const dados = mario;
    const situationStyle = {
        color: ( dados.ativa? 'green': 'red' )
    }
    const accPrices = dados.compras
        .map(({ preco }) => Number( preco.replace( 'R$ ', '' )))
        .reduce(( acc, item ) => acc + item )
	
	return (
        <div>
            <p> Cliente: { dados.cliente } </p>
            <p> Idade: { dados.idade } </p>
            <p> Situação: <span style={ situationStyle }> { dados.ativa ? 'Ativo(a)': 'Inativo(a)' } </span> </p>
            <p> Total gasto: R$ { accPrices } </p>
            { accPrices >= 10000 && <p>Você está gastando muito!</p> }
        </div>
    ) 
}
