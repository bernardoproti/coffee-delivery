import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const HeaderContainer = styled.header`
  display:flex;
  justify-content: space-between;
  
  max-height: 6.5rem;
  padding: 2rem 10rem;
`

export const HeaderInfoContainer = styled.nav`
  display: flex;
  min-width: 12.0625rem;
  height: 2.375rem;
  gap: .75rem
`

export const LocationContainer = styled.div`  
  display: flex;
  align-items: center;
  gap: .125rem;

  ${mixins.fonts.textS};

  background: ${props => props.theme['purple-light']};
  color: ${props => props.theme['purple']};
  border-radius: 6px;

  min-width: 8.9375rem;
  padding: .5rem;

  & span {
    color: ${props => props.theme['purple-dark']};
  }
`

export const ShoppingCartContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.375rem;
  color: ${props => props.theme['yellow-dark']};
  background: ${props => props.theme['yellow-light']};
  border: none;
  border-radius: 6px;
`
