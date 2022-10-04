import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { Container } from '@/components';

export const RootContainer = styled.header`
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 20;
  background-color: ${({ theme }) => theme.background};
`;

export const HeaderContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 2rem 0;
`;

export const LogoContainer = styled.img`
  width: auto;
  height: 2.5rem;
  cursor: pointer;
`;

export const ActionsContainer = styled.nav`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const LocationContainer = styled.button`
  border: 0;
  border-radius: 6px;
  height: 2.375rem;
  display: flex;
  align-items: center;
  width: fit-content;
  gap: 0.25rem;
  padding: 0 0.5rem;
  background-color: ${({ theme }) => theme.purple.light};
  font-size: 0.875rem;
  color: ${({ theme }) =>
    theme.mode === 'light' ? theme.purple.dark : theme.white};

  & > svg {
    color: ${({ theme }) => theme.purple.main};
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.purple.main};
  }
`;

export const CartLink = styled(NavLink)`
  text-decoration: none;
  width: 2.375rem;
  height: 2.375rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  position: relative;
  background-color: ${({ theme }) => theme.yellow.light};
  color: ${({ theme }) => theme.yellow.dark};
`;

export const Badge = styled.span`
  position: absolute;
  top: -0.625rem;
  right: -0.625rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.25rem;
  min-width: 1.25rem;
  height: 1.25rem;
  min-height: 1.25rem;
  background-color: ${({ theme }) => theme.yellow.dark};
  color: ${({ theme }) => theme.white};
  font-size: 0.75rem;
  border-radius: 50%;
`;
