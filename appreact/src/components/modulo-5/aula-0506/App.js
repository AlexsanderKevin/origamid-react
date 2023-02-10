import React from 'react'
import './App.css'
import foto from './img/foto.jpg'
import svg from './img/foto.svg'
import { ReactComponent as ComponenteSvg } from './img/foto.svg'
import ImgSvg from './ImgSvg'

const App = () => {
  return (
    <div>
      <p className='fundo'></p>
      <img src={ foto } alt='foto jpg'/>
      <ImgSvg color='#764444'/>
    </div>
  )
}

export default App
