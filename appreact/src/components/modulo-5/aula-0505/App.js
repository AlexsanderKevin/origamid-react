import React from 'react'
import { Slide } from './Slide'

const App = () => {
  const slides = [
    {
      id: 'slide1',
      text: 'slide1'
    },
    {
      id: 'slide2',
      text: 'slide2'
    },
    {
      id: 'slide3',
      text: 'slide3'
    },
    {
      id: 'slide4',
      text: 'slide4'
    },
    {
      id: 'slide5',
      text: 'slide5'
    },
  ]

  return (
    <div>
      <Slide slides={ slides }/>
    </div>
  )
}

export default App
