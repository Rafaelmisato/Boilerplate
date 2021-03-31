import React, { ButtonHTMLAttributes } from 'react'
import { Container } from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  name: string
}

const Button: React.FC<ButtonProps> = ({ name, ...rest }) => {
  return <Container {...rest}>{name}</Container>
}

export default Button
