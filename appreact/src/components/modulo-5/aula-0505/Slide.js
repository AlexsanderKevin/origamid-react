import React from 'react'
import styles from './Slide.module.css'

export const Slide = ({ slides }) => {
  const [ active, setActive ] = React.useState(0)
  const [ position, setPosition ] = React.useState(0)
  const contentRef = React.useRef()

  React.useEffect(() => {
    const { width } = contentRef.current.getBoundingClientRect();
    setPosition( -(width * active) )
  }, [ active ])

  const slidePrev = () => active > 0 && setActive( active - 1 )
  const slideNext = () => active < slides.length -1 && setActive( active + 1 )

  return (
    <section className={ styles.container }>
      <div 
        ref={ contentRef }
        className={ styles.content }
        style={{ transform: `translateX(${position}px)` }}
      >
      { slides.map( slide => (
        <div key={ slide.id } className={ styles.item }>{ slide.text }</div>
      ))}
      </div>
      <nav className={ styles.nav }>
        <button onClick={ slidePrev }>Anterior</button>
        <button onClick={ slideNext }>Próximo</button>
      </nav>
    </section>
  )
}

