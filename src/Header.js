import React, { useContext }from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
import { ThemeContext } from './ThemeContext'
import "./Header.css";

const Header = (props) => {
  const {onToggleTheme} = useContext(ThemeContext);

  return (
    <div>
        <h1>{props.title}</h1> {/* refatorar essa linha */}
        <Button
          onClick={onToggleTheme}>
          Mudar Tema
        </Button>
        {props.children}
    </div>
  )
}
Header.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

Header.defaultProps = {
  title:`Alek a lenda`
}

export default Header