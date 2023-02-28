import React from 'react'
import PropTypes from 'prop-types'

const Button = ( props ) => {
  return (
    <button 
      style={{ 
        margin: `${props.margin}px`,
        width: `${props.width}px`, 
        height: `${props.width/3}px` 
      }}
    >
      { props.children }
    </button>
  )
}

Button.defaultProps = {
  margin: 100,
}

Button.propTypes = {
  width: PropTypes.number.isRequired,
}

export default Button
