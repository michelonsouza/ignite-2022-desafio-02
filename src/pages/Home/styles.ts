import styled from 'styled-components';

import { Container } from '@/components';

export const RootContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: 3rem;

  @media (min-width: 768px) {
    padding-bottom: 9.125rem;
  }
`;

export const ProductListContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: 3.475rem;
  margin: 0 auto;
  margin-top: 2.125rem;
`;

export const ProductListTitle = styled.h2`
  font-family: 'Baloo 2';
  font-weight: 800;
  font-size: 2rem;
  line-height: 1;
  color: ${({ theme }) => theme.typography.title};

  @media (min-width: 768px) {
    line-height: 130%;
  }
`;

export const ProductList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2.8rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 2.8rem 2rem;
  }
`;
