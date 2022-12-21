const App03 = () => {
	const filmes = [ 'Before Sunrise', 'Before Sunset', 'Before Midnight' ]

	return (
		<ul>
			{ filmes.map(( filme ) => (
				<li key={ filme }>{ filme }</li>
			))}
		</ul>
	)
}

export default App03
