import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const ButtonContainer = styled.label<{ $isSelected?: boolean; }>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  gap: .75rem;

  padding: 1rem;

  background: ${
    props => props.$isSelected
      ? props.theme['purple-light']
      : props.theme['base-button']
  };
  
  border: ${
    props => props.$isSelected
    ? `1px solid ${props.theme.purple}`
    : 'none'
  };
  border-radius: 6px;

  cursor: pointer;
  transition: background-color .25s;

  &:hover {
    ${props =>
      !props.$isSelected &&
      `background: ${props.theme['base-hover']};`
    }
  }

  & span {
    ${mixins.fonts.buttonM};
    color: ${props => props.theme['base-text']};
    white-space: nowrap;
  }

  & svg {
    color: ${props => props.theme.purple};
  }
`
