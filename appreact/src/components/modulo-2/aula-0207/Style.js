export default function AppStyle() {
	const estiloH1 = {
		color: 'blue',
		fontSize: '20px',
		fontFamily: 'Helvetica',
	}

	return (
		<div>
			<h1 style={estiloH1}> Empresa </h1>
			<p style={{ color: 'green' }}> Sempre Aberta </p>
		</div>
	)
}
