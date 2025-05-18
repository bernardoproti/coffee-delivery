import type { ReactNode, MouseEventHandler } from 'react'
import { ButtonContainer } from './styles'

interface ButtonProps {
  children: ReactNode
  onClick?: MouseEventHandler<HTMLLabelElement>
}

export function Button({ children, onClick }: ButtonProps) {
  return (
    <ButtonContainer onClick={onClick}>
      {children}
    </ButtonContainer>
  )
}
