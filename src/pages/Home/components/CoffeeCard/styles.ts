import styled from 'styled-components'
import { mixins } from '../../../../styles/mixins'

export const CoffeeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 16rem;
  height: 19.375rem;
  border-radius: 6px 36px 36px 6px;
  background: ${props => props.theme['base-card']};
`

export const CoffeeCardDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  & div:first-child {
    display: flex;
    flex-direction: column;
    gap: .75rem;
    margin: -1.25rem 0 1rem 0;

    & div {
      display: flex;
      gap: .25rem;
    }
  }
  & div:last-child {
    margin: 0 1.25rem;
    text-align: center;

    & h2 {
      ${mixins.fonts.titleS};
      color: ${props => props.theme['base-subtitle']};
      margin-bottom: .5rem;
    }

    & span {
      ${mixins.fonts.textS};
      color: ${props => props.theme['base-label']}
    }
  }
`

export const CoffeeCardDescriptionTypeContainer = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: .25rem .4rem;

  border-radius: 100px;

  ${mixins.fonts.tag}
  color: ${props => props.theme['yellow-dark']};
  background: ${props => props.theme['yellow-light']};
`

export const CoffeCardInfoContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.4375rem;
  
  height: 2.375rem;
  padding: 0 1.5rem;
  margin: 2.0625rem 0 1.25rem 0;

  & span {
    ${mixins.fonts.textS}
    color: ${props => props.theme['base-text']};

    & strong {
      ${mixins.fonts.titleM}
    }
  }

  
`

export const CoffeCardActionContainer = styled.div`
  display: flex;
  align-items: center;
  gap: .5rem;

  .shopping-cart {
    display: flex;
    align-items: center;

    color: ${props => props.theme['base-card']};
    background-color: ${props => props.theme['purple-dark']};

    padding: .5rem;
    border-radius: 6px;
  }
`
