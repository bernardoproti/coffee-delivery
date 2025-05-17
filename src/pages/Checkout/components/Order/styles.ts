import styled from 'styled-components'
import { mixins } from '../../../../styles/mixins'

export const OrderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  height: 5rem;
  padding: .5rem .25rem;
  margin-bottom: 3rem;

  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -1.5rem;
    width: 100%;
    height: 1px;
    background: ${props => props.theme['base-button']};
  }
  
  & div:first-child { 
    display: flex;
  }
`

export const OrderInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: .5rem;

  margin-left: 1.25rem;

  & span {
    color: ${props => props.theme['base-subtitle']};
  }
`

export const OrderActionContainer = styled.div`
  display: flex;
  gap: .5rem;
  
  height: 2rem;
  
  & div {
    gap: .5rem;
    padding: .5rem;
  }

  & label {
    gap: .25rem;
    padding: 0 .5rem;
  }
`

export const OrderPriceContainer = styled.span`
  ${mixins.fonts.textM};
  font-weight: bold;
  color: ${props => props.theme['base-text']};
`
