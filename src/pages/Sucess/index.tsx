import { MapPin, Timer, CurrencyDollar } from 'phosphor-react'
import illustration from '/images/illustration.svg'
import { useTheme } from 'styled-components'
import {
  SucessOrderContainer, SucessOrderInfoContainer, SucessOrderTitleContainer,
  SucessOrderUserInfoContainer,
} from './styles'

export function Sucess() {
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
                <span>Entrega em <strong>Rua Anjico, 97</strong></span>
                <span>Serra - Espírito Santo, ES</span>
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
                <strong>Cartão de Crédito</strong>
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
