import { Bank, CreditCard, CurrencyDollar, MapPin, Money } from 'phosphor-react'
import { TextInput } from '../../Form/TextInput'
import {
  CheckoutFormContainer, UserAdressContainer, AdressFormContainer,
  AdressInfoContainer, AdressTitleContainer, UserPaymentMethodContainer,
  PaymentMethodInfoContainer, PaymentMethodTitleContainer,
  PaymentMethodActionContainer, UserOrderSummaryContainer,
} from './styles'
import { Button } from '../../Form/Button'
import { Order } from './components/Order'

export function Checkout() {
  return (
    <CheckoutFormContainer>
      <div>
        <h1>Complete seu pedido</h1>
        <UserAdressContainer>
          <AdressInfoContainer>
            <div>
              <MapPin size={22} />
            </div>

            <AdressTitleContainer>
              <h2>Endereço de Entrega</h2>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </AdressTitleContainer>
          </AdressInfoContainer>
          <AdressFormContainer>
            <form action="submit">
              <TextInput gridAreaName="cep" placeholder="CEP" />
              <TextInput gridAreaName="street" placeholder="Rua" />
              <TextInput gridAreaName="number" placeholder="Número" />
              <TextInput gridAreaName="complement" placeholder="Complemento" />
              <TextInput gridAreaName="neighborhood" placeholder="Bairro" />
              <TextInput gridAreaName="city" placeholder="Cidade" />
              <TextInput gridAreaName="state" placeholder="UF" />
            </form>
          </AdressFormContainer>
        </UserAdressContainer>
        <UserPaymentMethodContainer>
          <PaymentMethodInfoContainer>
            <div>
              <CurrencyDollar size={22} />
            </div>

            <PaymentMethodTitleContainer>
              <h2>Pagamento</h2>
              <span>
                O pagemento é feito na entrega. Escolha a forma que deseja pagar
              </span>
            </PaymentMethodTitleContainer>
          </PaymentMethodInfoContainer>
          <PaymentMethodActionContainer>
            <Button>
              <CreditCard />
              <span>CARTÃO DE CRÉDITO</span>
            </Button>
            <Button>
              <Bank />
              <span>CARTÃO DE DÉBITO</span>
            </Button>
            <Button>
              <Money />
              <span>DINHEIRO</span>
            </Button>
          </PaymentMethodActionContainer>
        </UserPaymentMethodContainer>
      </div>
      <div>
        <h1>Cafés selecionados</h1>
        <UserOrderSummaryContainer>
          <Order />
        </UserOrderSummaryContainer>
      </div>
    </CheckoutFormContainer>
  )
}
