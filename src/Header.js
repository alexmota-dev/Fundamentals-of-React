import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
const Header = (props) => {
  return (
    <div>
        <h1>{props.title}</h1>
        <Button
          onClick={props.onToggleTheme}>
          Mudar Tema
        </Button>
        {props.children}
    </div>
  )
}
Header.propTypes = {
  onToggleTheme: PropTypes.func.isRequired,
  title: PropTypes.string,
  children: PropTypes.node,
};

Header.defaultProps = {
  title:`Alek a lenda`
}

export default Header