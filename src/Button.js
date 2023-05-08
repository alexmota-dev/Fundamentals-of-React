import React from 'react'
import PropTypes from 'prop-types';

const Button = (props) => {
  return (
    <button onClick={()=> props.onClick()}>
        {props.children}
    </button>
  )
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired,
  };

export default Button