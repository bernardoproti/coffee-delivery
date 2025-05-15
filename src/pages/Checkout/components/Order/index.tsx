import { Trash } from 'phosphor-react'
import espresso from '/images/coffees/espresso.svg'
import { QuantityInput } from '../../../../Form/QuantityInput'
import { Button } from '../../../../Form/Button'
import {
  OrderContainer, OrderInfoContainer, OrderActionContainer,
  OrderPriceContainer,
} from './styles'

export function Order() {
  return (
    <OrderContainer>
      <div>
        <img src={espresso} alt="Expresso Tradicional" />

        <OrderInfoContainer>
          <span>Expresso Tradicional</span>

          <OrderActionContainer>
            <QuantityInput />

            <Button>
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
