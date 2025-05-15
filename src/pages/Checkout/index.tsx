import { MapPin } from 'phosphor-react'
import { TextInput } from '../../Form/TextInput'
import {
  AdressFormContainer, AdressInfoContainer, AdressTitleContainer,
  CheckoutFormContainer, UserAdressContainer, UserPaymentMethodContainer,
} from './styles'

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
        <UserPaymentMethodContainer />
      </div>
    </CheckoutFormContainer>
  )
}
