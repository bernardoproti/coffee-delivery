import type { ReactNode, MouseEventHandler } from 'react'
import { ButtonContainer } from './styles'

interface ButtonProps {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLLabelElement>;
  isSelected?: boolean;
}

export function Button({ children, isSelected, onClick }: ButtonProps) {
  return (
    <ButtonContainer onClick={onClick} $isSelected={isSelected}>
      {children}
    </ButtonContainer>
  )
}
