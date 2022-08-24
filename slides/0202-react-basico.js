// 2 / 6
// React Element
// Todo elemento React é criado com a função createElement. O Babel é o responsável por transformar o elemento criado com JSX (que se parece com HTML) em funções de React.
function App {
    return <div id="container">Meu App</div>
}
// É transformado em:
function App() {
    return React.createElement('div', {id: 'container'}, 'Meu App')
}

// 3 / 6
// Componentes
// Permitem você dividir a sua interface em pequenos elementos. São craidos através de funções que retornam elementos React ou classes que estendem ReactComponent e possuem o método render retornando um elemento React.