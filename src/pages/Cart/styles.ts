import styled from 'styled-components';

import { Container } from '@/components';

export const RootContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  padding-top: 1.5rem;
  margin: 0 auto;
  gap: 1rem;

  @media (min-width: 768px) {
    padding-top: 2.5rem;
    flex-direction: row;
    gap: 2rem;
  }
`;

export const AddressContainer = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1.43;
  max-width: 100%;

  & > div + div {
    margin-top: 0.75rem;
  }
`;

export const SectionTitle = styled.h3`
  font-family: 'Baloo 2';
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.typography.subtitle};

  @media (min-width: 768px) {
    line-height: 130%;
  }
`;

export const Card = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.common.card};

  @media (min-width: 768px) {
    padding: 2.5rem;
  }
`;

export const ItemsCard = styled(Card)`
  border-radius: 6px 44px;
  flex: 1;
`;

export const ProductsContainer = styled.div`
  flex: 1;
`;
