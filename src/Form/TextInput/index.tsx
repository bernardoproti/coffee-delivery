import type { InputHTMLAttributes } from 'react'
import { TextInputContainer } from './styles'

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  gridAreaName: string
  placeholder: string
}

export function TextInput({
  gridAreaName, placeholder, ...rest
}: TextInputProps) {
  return (
    <TextInputContainer $gridAreaName={gridAreaName}>
      <input placeholder={placeholder} {...rest} />
    </TextInputContainer>
  )
}
