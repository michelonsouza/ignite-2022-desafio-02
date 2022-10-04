/* eslint-disable @typescript-eslint/no-unused-vars */
import { useCallback, useState, useEffect } from 'react';

import { MapPin, ShoppingCart } from 'phosphor-react';
import { useNavigate, useLocation } from 'react-router-dom';

// import coffeeDeliveryDarkLogo from '@/assets/icons/logo-dark.svg';
import coffeeDeliveryLogo from '@/assets/icons/logo.svg';
import { useCartContext, useUserSharedPreferencesContext } from '@/hooks';

import {
  HeaderContainer,
  LogoContainer,
  ActionsContainer,
  LocationContainer,
  CartLink,
  Badge,
} from './styles';

export function Header(): JSX.Element {
  const location = useLocation();
  const navigate = useNavigate();
  const { totalItemsQuantity } = useCartContext();
  const { region } = useUserSharedPreferencesContext();

  const handleGoHome = useCallback(() => {
    if (location.pathname !== '/') {
      navigate('/');
    }
  }, [location, navigate]);

  return (
    <HeaderContainer>
      <LogoContainer
        role="presentation"
        onClick={handleGoHome}
        src={coffeeDeliveryLogo}
        alt="Coffee Delivery com um copo de café"
      />
      <ActionsContainer>
        <LocationContainer type="button">
          <MapPin size={22} weight="fill" />
          <span>{region}</span>
        </LocationContainer>
        <CartLink to="/cart">
          <ShoppingCart size={22} weight="fill" />
          {!!totalItemsQuantity && (
            <Badge>{totalItemsQuantity > 9 ? '+9' : totalItemsQuantity}</Badge>
          )}
        </CartLink>
      </ActionsContainer>
    </HeaderContainer>
  );
}
