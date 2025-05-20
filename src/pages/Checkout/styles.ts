import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const CheckoutFormContainer = styled.div`
  display: flex;
  gap: 2rem;
  padding: 2.5rem 10rem;

  & h1 {
    ${mixins.fonts.titleXS};
    color: ${props => props.theme['base-subtitle']};
    margin-bottom:.9375rem
  }
`
const BaseCard = styled.div`
  display: flex;
  flex-direction: column;

  width: 40rem;
  padding: 2.5rem;
  border-radius: 6px;

  background: ${props => props.theme['base-card']};
`

export const UserAdressContainer = styled(BaseCard)`
  margin-bottom: .75rem;
`

export const AdressInfoContainer = styled.header`
  display: flex;
  gap: .5rem;
  
  ${mixins.fonts.titleXS};
  color: ${props => props.theme['base-subtitle']};
  margin-bottom: 2rem;

  & div svg {
    color: ${props => props.theme['yellow-dark']};
    font-size: 0;
  }
`

export const AdressTitleContainer = styled.div`
  display: flex;

  flex-direction: column;
  gap: .125rem;

  & h2 {
    ${mixins.fonts.textM};
    color: ${props => props.theme['base-subtitle']};
  }

  & span {
    ${mixins.fonts.textS};
    color: ${props => props.theme['base-text']};
  }
`

export const AdressFormContainer = styled.footer`
  & form {
    display: grid;
    grid-template-areas: 
      "cep . ."
      "street street street"
      "number complement complement"
      "neighborhood city state";
    grid-template-columns: 12.5rem 1fr 3.75rem;

    grid-gap: 1rem .75rem;
  }
`

export const UserPaymentMethodContainer = styled(BaseCard)``

export const PaymentMethodInfoContainer = styled.header`
  display: flex;
  gap: .5rem;
  
  ${mixins.fonts.titleXS};
  color: ${props => props.theme['base-subtitle']};
  margin-bottom: 2rem;

  & div svg {
    color: ${props => props.theme.purple};
    font-size: 0;
  }
`

export const PaymentMethodTitleContainer = styled.div`
  display: flex;

  flex-direction: column;
  gap: .125rem;

  & h2 {
    ${mixins.fonts.textM};
    color: ${props => props.theme['base-subtitle']};
  }

  & span {
    ${mixins.fonts.textS};
    color: ${props => props.theme['base-text']};
  }
`

export const PaymentMethodActionContainer = styled.footer`
  display: flex;
  gap: .75rem;
  max-height: 3.1875rem;
  width: 35rem;

  & label{
    justify-content: flex-start;
  }
`

export const UserOrderSummaryContainer = styled(BaseCard)`
  width: 28rem;
  border-radius: 6px 44px 6px 44px;
`

export const UserOrderSummaryPrice = styled.div`
  display: flex;
  flex-direction: column;
  gap: .75rem;
  
  & div {
    display: flex;
    justify-content: space-between;
    ${mixins.fonts.textS};
    color: ${props => props.theme['base-text']};
  }

  & div:last-child {
    ${mixins.fonts.textL};
    font-weight: bold;
    color: ${props => props.theme['base-subtitle']};
  }
`

export const CheckoutButtonContainer = styled.button`
  width: 100%;
  height: 2.875rem;

  padding: .75rem .5rem;
  margin-top: 2rem;

  border-radius: 6px;

  ${mixins.fonts.buttonG};
  color: ${props => props.theme.white};
  background: ${props => props.theme.yellow};

  &:hover {
    background: ${props => props.theme['yellow-dark']};
  }
`

export const PaymentErrorMessage = styled.span`
  ${mixins.fonts.textXS};
  font-weight: bold;
  color: red;
`
