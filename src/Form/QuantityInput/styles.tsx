import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const Container = styled.div`
  display: flex;
  align-items: center;
  
  padding: 8px;
  background-color: ${({ theme }) => theme['base-button']};
  border-radius: 6px;

  gap: 4px;

  button {
    background-color: transparent;
    display: flex;
    align-items: center;
  }

  button svg {
    color: ${({ theme }) => theme.purple};

    transition: all 0.2s;

    &:hover {
      color: ${({ theme }) => theme['purple-dark']};
    }
  }

  span {
    ${mixins.fonts.textM}
    color: ${({ theme }) => theme['base-title']};
    padding-top: 2px;
  }
`
