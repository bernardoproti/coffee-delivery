import styled from 'styled-components'

export const TextInputContainer = styled.div<{ $gridAreaName: string }>`
  grid-area: ${props => props.$gridAreaName};

  input {
    width: 100%;
    padding: 0.75rem;

    border-radius: 4px;

    background: ${props => props.theme['base-input']};
    color: ${props => props.theme['base-label']};

    border: none; 
  }
`
