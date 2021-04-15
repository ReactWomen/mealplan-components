import React from 'react';
import PropTypes from 'prop-types';
import { Text, ButtonContainer } from './button.style'

const Button = (props) => {
  const { onClick, text, disable, icon, className } = props
  return (
    <ButtonContainer
      className={className}
      onClick={onClick}
    >
      {text &&
        <Text>{text}</Text>
      }
    </ButtonContainer>
  )
}

Button.defaultProps = {
  text: 'Button'
}

export default Button;