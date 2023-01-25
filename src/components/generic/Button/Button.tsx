import {FC,ButtonHTMLAttributes} from 'react'

import { StyledButton } from './styles'

export const Button:FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
  return (
    <StyledButton {...props}>{props.children}</StyledButton>
  )
}
