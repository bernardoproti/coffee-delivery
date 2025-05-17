import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const ButtonContainer = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  flex: 1;
  gap: .75rem;

  background: ${props => props.theme['base-button']};

  padding: 1rem;
  
  border-radius: 6px;

  cursor: pointer;

  &:hover {
    background: ${props => props.theme['base-hover']};
  }

  & span {
    ${mixins.fonts.buttonM};
    color: ${props => props.theme['base-text']};
  }

  & svg {
    color: ${props => props.theme.purple};
  }
`
