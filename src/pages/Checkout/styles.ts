import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const CheckoutFormContainer = styled.form`
  padding: 2.5rem 10rem;
`

export const PaymentContainer = styled.div`
  & header {
    ${mixins.fonts.titleXS};
    color: ${props => props.theme['base-subtitle']};
    margin-bottom: .9375rem;
  }
`
