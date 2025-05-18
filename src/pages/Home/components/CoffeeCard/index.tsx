import {
  CoffeCardActionContainer, CoffeCardInfoContainer,
  CoffeCardShoppingCartContainer, CoffeCardTitleAndDescriptionContainer,
  CoffeeCardContainer, CoffeeCardDescriptionContainer,
  CoffeeCardDescriptionTypeContainer,
} from './styles'
import { ShoppingCart } from 'phosphor-react'
import { QuantityInput } from '../../../../Form/QuantityInput'
import { useContext, useState } from 'react'
import type { OrderItem } from '../../../../reducers/orders/reducer'
import { OrdersContext } from '../../../../contexts/OrdersContext'

interface CoffeeCardProps {
  id: number;
  name: string;
  image: string;
  types: string[];
  description: string;
  price: string;
}

export function CoffeeCard({
  id, name, image, types, description, price,
}: CoffeeCardProps) {
  const [quantity, setQuantity] = useState(1)
  const { addNewOrder } = useContext(OrdersContext)

  function handleNewOrder() {
    const newOrder: OrderItem = {
      id,
      image,
      name,
      quantity,
    }

    addNewOrder(newOrder)
  }

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

          <CoffeCardShoppingCartContainer onClick={(handleNewOrder)}>
            <ShoppingCart size={22} weight="fill" />
          </CoffeCardShoppingCartContainer>
        </CoffeCardActionContainer>
      </CoffeCardInfoContainer>
    </CoffeeCardContainer>
  )
}
