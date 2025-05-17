import coffeDeliveryImage from '../../assets/outdoor-image.svg'
import heroBackground from '/bg.svg'

import {
  CoffeesContainer, CoffesMenuContainer, DescriptionContainer,
  OutdoorContainer, TitleContainer,
} from './styles'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { CoffeeCard } from './components/CoffeeCard'
import { useContext } from 'react'
import { OrdersContext } from '../../contexts/OrdersContext'

export function Home() {
  const theme = useTheme()
  const { coffees } = useContext(OrdersContext)

  return (
    <>
      <OutdoorContainer>
        <div>
          <TitleContainer>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffe Delivery você recebe seu café onde estiver,
              a qualquer hora
            </p>
          </TitleContainer>
          <DescriptionContainer>
            <div>
              <ShoppingCart
                size={32}
                weight="fill"
                style={{ backgroundColor: theme['yellow-dark'] }}
              />
              <span>Compra simples e segura</span>
            </div>
            <div>
              <Timer
                size={32}
                weight="fill"
                style={{ backgroundColor: theme['base-text'] }}
              />
              <span>Entrega rápida e rastreada</span>
            </div>
            <div>
              <Package
                size={32}
                weight="fill"
                style={{ backgroundColor: theme.yellow }}
              />
              <span>Embalagem mantém o café intacto</span>
            </div>
            <div>
              <Coffee
                size={32}
                weight="fill"
                style={{ backgroundColor: theme.purple }}
              />
              <span>O café chega fresquinho até você</span>
            </div>
          </DescriptionContainer>
        </div>
        <div>
          <img src={coffeDeliveryImage} />
        </div>
        <img src={heroBackground} />
      </OutdoorContainer>
      <CoffeesContainer>
        <header>
          <h1>Nossos cafés</h1>
        </header>
        <CoffesMenuContainer>
          {coffees.map((coffee) => {
            return (
              <CoffeeCard
                key={coffee.id}
                id={coffee.id}
                name={coffee.name}
                image={coffee.image}
                types={coffee.types}
                description={coffee.description}
                price={coffee.price}
              />
            )
          })}
        </CoffesMenuContainer>
      </CoffeesContainer>
    </>
  )
}
