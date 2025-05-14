import espresso from '/images/coffees/espresso.svg'
import {
  CoffeCardActionContainer, CoffeCardInfoContainer, CoffeeCardContainer,
  CoffeeCardDescriptionContainer, CoffeeCardDescriptionTypeContainer,
} from './styles'
import { ShoppingCart } from 'phosphor-react'
import { QuantityInput } from '../../../../Form/QuantityInput'

export function CoffeeCard() {
  return (
    <CoffeeCardContainer>
      <CoffeeCardDescriptionContainer>
        <div>
          <img src={espresso} alt="Expresso Tradicional" />
          <CoffeeCardDescriptionTypeContainer>
            TRADICIONAL
          </CoffeeCardDescriptionTypeContainer>
        </div>
        <div>
          <h2>Expresso Tradicional</h2>
          <span>O tradicional café feito com água quente e grãos moídos</span>
        </div>
      </CoffeeCardDescriptionContainer>
      <CoffeCardInfoContainer>
        <span>
          <span>R$</span>
          <strong>9,90</strong>
        </span>

        <CoffeCardActionContainer>
          <QuantityInput />

          <button className="shopping-cart">
            <ShoppingCart size={22} weight="fill" />
          </button>
        </CoffeCardActionContainer>
      </CoffeCardInfoContainer>
    </CoffeeCardContainer>
  )
}
