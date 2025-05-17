import {
  CoffeCardActionContainer, CoffeCardInfoContainer,
  CoffeCardShoppingCartContainer, CoffeCardTitleAndDescriptionContainer,
  CoffeeCardContainer, CoffeeCardDescriptionContainer,
  CoffeeCardDescriptionTypeContainer,
} from './styles'
import { ShoppingCart } from 'phosphor-react'
import { QuantityInput } from '../../../../Form/QuantityInput'
import { useState } from 'react'

interface CoffeeCardProps {
  name: string;
  image: string;
  types: string[];
  description: string;
  price: string;
}

export function CoffeeCard({
  name, image, types, description, price,
}: CoffeeCardProps) {
  const [quantity, setQuantity] = useState(1)

  function handleIncrementQuantity() {
    setQuantity(state => state + 1)
  }

  function handleDecrementQuantity() {
    if (quantity > 1) {
      setQuantity(state => state - 1)
    }
  }

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
          <QuantityInput
            quantity={quantity}
            incrementQuantity={handleIncrementQuantity}
            decrementQuantity={handleDecrementQuantity}
          />

          <CoffeCardShoppingCartContainer>
            <ShoppingCart size={22} weight="fill" />
          </CoffeCardShoppingCartContainer>
        </CoffeCardActionContainer>
      </CoffeCardInfoContainer>
    </CoffeeCardContainer>
  )
}
