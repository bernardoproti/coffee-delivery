import { AdressInput } from '../../Form/AdressInput'
import { CheckoutFormContainer, PaymentContainer } from './styles'

export function Checkout() {
  return (
    <>
      <CheckoutFormContainer>
        <PaymentContainer>
          <header>
            Complete seu pedido
          </header>
          <footer>
            <form action="submit">
              <AdressInput placeholder="CEP" />
              <AdressInput placeholder="Rua" />
              <AdressInput placeholder="Número" />
              <AdressInput placeholder="Complemento" />
              <AdressInput placeholder="Bairro" />
              <AdressInput placeholder="Cidade" />
              <AdressInput placeholder="UF" />
            </form>
          </footer>
        </PaymentContainer>

      </CheckoutFormContainer>
    </>
  )
}
