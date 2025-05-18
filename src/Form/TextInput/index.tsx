import type { InputHTMLAttributes } from 'react'
import { OptinalTag, TextInputContainer } from './styles'

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  gridAreaName: string;
  optional?: boolean;
}

export function TextInput({
  gridAreaName, optional, ...rest
}: TextInputProps) {
  return (
    <TextInputContainer $gridAreaName={gridAreaName}>
      <input {...rest} />
      {optional && <OptinalTag>Opcional</OptinalTag>}
    </TextInputContainer>
  )
}
