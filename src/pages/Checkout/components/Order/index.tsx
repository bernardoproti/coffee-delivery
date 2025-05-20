import { Trash } from '@phosphor-icons/react'
import { QuantityInput } from '../../../../Form/QuantityInput'
import { Button } from '../../../../Form/Button'
import {
  OrderContainer, OrderInfoContainer, OrderActionContainer,
  OrderPriceContainer,
} from './styles'
import type { OrderItem } from '../../../../reducers/orders/reducer'
import { useContext } from 'react'
import { OrdersContext } from '../../../../contexts/OrdersContext'

export function Order({ id, image, name, quantity }: OrderItem) {
  const {
    removeOrder,
    incrementOrder,
    decrementOrder,
  } = useContext(OrdersContext)

  function handleRemoveOrder() {
    removeOrder(id)
  }

  return (
    <OrderContainer>
      <div>
        <img src={image} alt={name} />

        <OrderInfoContainer>
          <span>{name}</span>

          <OrderActionContainer>
            <QuantityInput
              quantity={quantity}
              incrementQuantity={() => incrementOrder(id)}
              decrementQuantity={() => decrementOrder(id)}
            />

            <Button onClick={handleRemoveOrder}>
              <Trash />
              <span>REMOVER</span>
            </Button>
          </OrderActionContainer>
        </OrderInfoContainer>
      </div>
      <OrderPriceContainer>
        R$ 9,90
      </OrderPriceContainer>
    </OrderContainer>
  )
}
