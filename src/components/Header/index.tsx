import { NavLink } from 'react-router-dom'
import { MapPin, ShoppingCart } from 'phosphor-react'
import coffeDeliveryLogo from '../../assets/logo-image.svg'
import {
  HeaderContainer, HeaderInfoContainer, LocationContainer,
  ShoppingCartNavLinkContainer,
} from './styles'

export function Header() {
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
        </ShoppingCartNavLinkContainer>
      </HeaderInfoContainer>
    </HeaderContainer>
  )
}
