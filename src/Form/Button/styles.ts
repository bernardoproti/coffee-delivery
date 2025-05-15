import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const ButtonContainer = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  
  gap: .75rem;

  flex-wrap: nowrap;

  ${mixins.fonts.buttonM}
  background: ${props => props.theme['base-button']};
  color: ${props => props.theme['base-text']};

  padding: 1rem;
  
  border-radius: 6px;

  & svg {
    color: ${props => props.theme.purple};
  }
`
