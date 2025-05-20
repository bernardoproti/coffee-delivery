import { MapPin, Timer, CurrencyDollar } from '@phosphor-icons/react'
import illustration from '/illustration.svg'
import { useTheme } from 'styled-components'
import {
  SucessOrderContainer, SucessOrderInfoContainer, SucessOrderTitleContainer,
  SucessOrderUserInfoContainer,
} from './styles'
import { useContext } from 'react'
import { OrdersContext } from '../../contexts/OrdersContext'

export function Sucess() {
  const { orderInfo } = useContext(OrdersContext)
  const theme = useTheme()

  return (
    <SucessOrderContainer>
      <SucessOrderTitleContainer>
        <h1>Uhu! Pedido confirmado</h1>
        <span>Agora é só esperar que logo o café chegará até você</span>
      </SucessOrderTitleContainer>
      <SucessOrderInfoContainer>
        <div>
          <SucessOrderUserInfoContainer>
            <div>
              <MapPin
                size={32}
                style={{ backgroundColor: theme.purple }}
              />
              <div>
                <span>
                  {'Entrega em '}
                  <strong>
                    {orderInfo.street}, {orderInfo.number}
                  </strong>
                </span>
                <span>
                  {orderInfo.city} - Espírito Santo, {orderInfo.state}
                </span>
              </div>
            </div>
            <div>
              <Timer
                size={32}
                style={{ backgroundColor: theme.yellow }}
              />
              <div>
                <span>Previsão de entrega</span>
                <strong>20 min - 30 min</strong>
              </div>
            </div>
            <div>
              <CurrencyDollar
                size={32}
                style={{ backgroundColor: theme['yellow-dark'] }}
              />
              <div>
                <span>Pagamento na entrega</span>
                <strong>
                  {orderInfo.paymentMethod === 'credit'
                    ? 'Cartão de crédito'
                    : orderInfo.paymentMethod === 'debit'
                      ? 'Cartão de débito'
                      : orderInfo.paymentMethod === 'cash'
                        ? 'Dinheiro'
                        : ''}
                </strong>
              </div>
            </div>
          </SucessOrderUserInfoContainer>
        </div>
        <div>
          <img src={illustration} />
        </div>
      </SucessOrderInfoContainer>
    </SucessOrderContainer>
  )
}
