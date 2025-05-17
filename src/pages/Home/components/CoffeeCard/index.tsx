import {
  CoffeCardActionContainer, CoffeCardInfoContainer,
  CoffeCardShoppingCartContainer, CoffeCardTitleAndDescriptionContainer,
  CoffeeCardContainer, CoffeeCardDescriptionContainer,
  CoffeeCardDescriptionTypeContainer,
} from './styles'
import { ShoppingCart } from 'phosphor-react'
import { QuantityInput } from '../../../../Form/QuantityInput'

interface CoffeeCardProps {
  name: string;
  image: string;
  types: string[];
  description: string;
  price: number;
}

export function CoffeeCard({
  name, image, types, description, price,
}: CoffeeCardProps) {
  return (
    <CoffeeCardContainer>
      <CoffeeCardDescriptionContainer>
        <div>
          <img src={image} alt="Expresso Tradicional" />

          <div>
            {types.map((type, index) => {
              return (
                <CoffeeCardDescriptionTypeContainer key={index}>
                  {type}
                </CoffeeCardDescriptionTypeContainer>
              )
            })}
          </div>
        </div>
        <CoffeCardTitleAndDescriptionContainer>
          <h2>{name}</h2>
          <span>{description}</span>
        </CoffeCardTitleAndDescriptionContainer>
      </CoffeeCardDescriptionContainer>
      <CoffeCardInfoContainer>
        <span>
          <span>R$</span>
          <strong>{price}</strong>
        </span>

        <CoffeCardActionContainer>
          <QuantityInput />

          <CoffeCardShoppingCartContainer>
            <ShoppingCart size={22} weight="fill" />
          </CoffeCardShoppingCartContainer>
        </CoffeCardActionContainer>
      </CoffeCardInfoContainer>
    </CoffeeCardContainer>
  )
}
