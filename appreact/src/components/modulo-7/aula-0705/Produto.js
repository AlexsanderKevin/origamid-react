import React from 'react'

class Produtos extends React.Component {
  constructor( props ) {
    super( props )
    this.state = {
      contar: 0,
    }
    this.handleClick = this.handleClick.bind( this )
  }

  handleClick() {
    this.setState( state => ({ contar: state.contar + 1 }))
  }

  componentDidMount() {
    // momento bom pra fazer um fetch
    console.log('Montou agora')
  }

  componentDidUpdate() {
    document.title = this.state.contar
  }

  componentWillUnmount() {
    console.log('saiu da tela')
  }

  render() {
    return (
      <div>
        <h1>{ this.props.titulo }</h1>
        <p>{ this.state.contar }</p>
        <button
          onClick={this.handleClick} 
        >
          Adicionar
        </button>
      </div>
    )
  }
}

export default Produtos
