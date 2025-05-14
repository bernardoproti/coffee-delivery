import { AdressInputContainer } from './styles'

interface AdressInputProps {
  placeholder: string;
}

export function AdressInput({ placeholder }:AdressInputProps) {
  return (
    <AdressInputContainer>
      <input type="text" placeholder={placeholder} />
    </AdressInputContainer>
  )
}
