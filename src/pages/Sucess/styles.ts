import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const SucessOrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  margin-top: 5rem;
  padding: 0 10rem;
`

export const SucessOrderTitleContainer = styled.header`
  display: flex;
  flex-direction: column;
  gap: .25rem;
  
  & h1 {
    ${mixins.fonts.titleL};
    color: ${props => props.theme['yellow-dark']};
  }

  & span {
    ${mixins.fonts.textL};
    color: ${props => props.theme['base-subtitle']};
  }
`

export const SucessOrderInfoContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 6.375rem;

  & > div:first-child {
    border: 1px solid;
    border-radius: 6px 36px;
    width: 100%;
    height: 100%;

    border-color: transparent;
    background-origin: border-box;
    background-image: ${
      ({ theme }) => `
        linear-gradient(to bottom right, ${theme.yellow}, ${theme.purple})
      `
    };
  }
`

export const SucessOrderUserInfoContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  gap: 2rem;

  padding: 2.5rem;
  border-radius: 6px 36px;

  background: ${props => props.theme.white};

  ${mixins.fonts.textM};

  & span, 
  & strong {
    color: ${props => props.theme['base-text']};
  }

  & > div {
    display: flex;
    align-items: center;
    gap: .75rem;

    & svg {
      color: ${props => props.theme.white};
      padding: .5rem;
      border-radius: 50%;
    }

    & div {
      display: flex;
      flex-direction: column;
      gap: 0;
    }
  }
`
