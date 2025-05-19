import { useContext, useEffect, useState } from 'react'
import { OrdersContext } from '../../../../contexts/OrdersContext'
import type { OrderItem } from '../../../../reducers/orders/reducer'
import { QuantityInput } from '../../../../Form/QuantityInput'
import { ShoppingCart, CheckFat } from '@phosphor-icons/react'
import {
  CoffeCardActionContainer, CoffeCardInfoContainer,
  CoffeCardButtonContainer, CoffeCardTitleAndDescriptionContainer,
  CoffeeCardContainer, CoffeeCardDescriptionContainer,
  CoffeeCardDescriptionTypeContainer,
} from './styles'

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
  const [orderAdded, setOrderAdded] = useState(false)
  const { addNewOrder } = useContext(OrdersContext)

  function handleNewOrder() {
    const newOrder: OrderItem = {
      id,
      image,
      name,
      quantity,
    }

    addNewOrder(newOrder)
    setOrderAdded(true)
  }

  function handleIncrementQuantity() {
    setQuantity(state => state + 1)
  }

  function handleDecrementQuantity() {
    if (quantity > 1) {
      setQuantity(state => state - 1)
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setOrderAdded(false)
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [orderAdded, setOrderAdded])

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

          <CoffeCardButtonContainer
            aria-disabled={orderAdded}
            onClick={(handleNewOrder)}
            $orderAdded={orderAdded}
          >
            {orderAdded
              ? <CheckFat size={22} weight="fill" />
              : <ShoppingCart size={22} weight="fill" />}
          </CoffeCardButtonContainer>
        </CoffeCardActionContainer>
      </CoffeCardInfoContainer>
    </CoffeeCardContainer>
  )
}
