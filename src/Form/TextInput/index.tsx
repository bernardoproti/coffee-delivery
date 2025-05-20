import type { InputHTMLAttributes } from 'react'
import { ErrorTag, OptinalTag, TextInputContainer } from './styles'

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  gridAreaName: string;
  optional?: boolean;
  error?: {
    message?: string;
  }
}

export function TextInput({
  gridAreaName, optional = false, error, ...rest
}: TextInputProps) {
  return (
    <TextInputContainer $gridAreaName={gridAreaName}>
      <input {...rest} />
      {optional && <OptinalTag>Opcional</OptinalTag>}
      {error && error.message && (
        <ErrorTag>{error.message}</ErrorTag>
      )}
    </TextInputContainer>
  )
}
