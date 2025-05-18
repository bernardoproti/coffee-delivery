import { NavLink } from 'react-router-dom'
import { MapPin, ShoppingCart } from 'phosphor-react'
import coffeDeliveryLogo from '/logo.svg'
import {
  HeaderContainer, HeaderInfoContainer, LocationContainer,
  ShoppingCartNavLinkContainer,
} from './styles'
import { OrdersContext } from '../../contexts/OrdersContext'
import { useContext } from 'react'

export function Header() {
  const { orders } = useContext(OrdersContext)

  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={coffeDeliveryLogo} alt="Coffe Delivery Logo" />
      </NavLink>

      <HeaderInfoContainer>
        <LocationContainer>
          <MapPin size={22} weight="fill" />
          <span>Espírito Santo, ES</span>
        </LocationContainer>

        <ShoppingCartNavLinkContainer to="/checkout">
          <ShoppingCart size={22} weight="fill" />
          {
            orders.length > 0
              ? <span>{orders.length}</span>
              : null
          }
        </ShoppingCartNavLinkContainer>
      </HeaderInfoContainer>
    </HeaderContainer>
  )
}
