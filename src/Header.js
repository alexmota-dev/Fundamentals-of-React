import React from 'react'
import PropTypes from 'prop-types'
const Header = (props) => {
  return (
    <div>
        <h1>{props.title}</h1>
        <h2>{Math.random()}</h2>
        {props.children}
    </div>
  )
}

Header.defaultProps = {
  title:`Alek a lenda`
}

export default Header