import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const TextInputContainer = styled.div<{ $gridAreaName: string }>`
  position: relative;
  grid-area: ${props => props.$gridAreaName};

  input {
    width: 100%;
    padding: 0.75rem;

    border-radius: 4px;

    ${mixins.fonts.textS};
    background: ${props => props.theme['base-input']};

    border: none;

    &:focus {
      outline: none;
      border: 1px solid ${props => props.theme['yellow-dark']};
    }
  }
`

export const OptinalTag = styled.span`
  position: absolute;
  top: 50%;
  right: 0.75rem;
  transform: translateY(-50%);

  ${mixins.fonts.textXS};
  font-weight: normal;
  font-style: italic;
  
  color: ${props => props.theme['base-label']}
`

export const ErrorTag = styled.span`
  ${mixins.fonts.textXS};
  white-space: nowrap;
  font-weight: 400;
  color: red;
`
