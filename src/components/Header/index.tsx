import { MapPin, ShoppingCart } from 'phosphor-react';

// import coffeeDeliveryDarkLogo from '@/assets/icons/logo-dark.svg';
import coffeeDeliveryLogo from '@/assets/icons/logo.svg';

import {
  HeaderContainer,
  LogoContainer,
  ActionsContainer,
  LocationContainer,
  CartLink,
  Badge,
} from './styles';

export function Header(): JSX.Element {
  return (
    <HeaderContainer>
      <LogoContainer
        src={coffeeDeliveryLogo}
        alt="Coffee Delivery com um copo de café"
      />
      <ActionsContainer>
        <LocationContainer type="button">
          <MapPin size={22} weight="fill" />
          <span>Porto Alegre, RS</span>
        </LocationContainer>
        <CartLink to="/cart">
          <ShoppingCart size={22} weight="fill" />
          <Badge>3</Badge>
        </CartLink>
      </ActionsContainer>
    </HeaderContainer>
  );
}
