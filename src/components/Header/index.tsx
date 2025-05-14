import {
  HeaderContainer, HeaderInfoContainer, LocationContainer,
  ShoppingCartNavLinkContainer,
} from './styles'
import coffeDeliveryLogo from '../../assets/logo-image.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <img src={coffeDeliveryLogo} alt="Coffe Delivery Logo" />

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
