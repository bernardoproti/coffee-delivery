import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const OutdoorContainer = styled.section`
  display: flex;
  align-items: center;
  gap: 3.5rem;
  padding: 5.875rem 10rem;

  &>img {
    position: absolute;
    left: 0;
    height: 34.625rem;
    width: 100%;
    object-fit: cover;
  }

  & div header {
    width: 36.75rem;
  }
  & div footer {
    width: 35.4375rem;
  }
`

export const TitleContainer = styled.header`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    color: ${props => props.theme['base-title']};
    ${mixins.fonts.titleXL}
  }

  p {
    color: ${props => props.theme['base-subtitle']};
    ${mixins.fonts.textL};
  }
`

export const DescriptionContainer = styled.footer`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 1.25rem;
  grid-column-gap: 2.5rem;

  margin-top: 4.125rem;

  color: ${props => props.theme['base-text']};
  ${mixins.fonts.textM};
  white-space: nowrap;

  & div {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    & svg {
      padding: 8px;
      color: ${props => props.theme.background};
      border-radius: 50%;
    }
  }
`

export const CoffeesContainer = styled.main`
  padding: 2rem 10rem 0rem 10rem;

  header {
    margin-bottom: 3.375rem;

    & h1 {
      ${mixins.fonts.titleL}
      color: ${props => props.theme['base-subtitle']}
    }
  }
`

export const CoffesMenuContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem 2rem;
  margin-bottom: 9.8125rem;
`
