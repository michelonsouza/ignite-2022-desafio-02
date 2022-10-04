import styled from 'styled-components';

import { Container } from '@/components';

export const RootContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  padding-bottom: 3rem;
  z-index: 10;

  @media (min-width: 768px) {
    padding-bottom: 9.125rem;
  }
`;

export const PageContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  margin: 5rem auto;
`;

export const InvoiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 6.375rem;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  margin-bottom: 2.5rem;
`;

export const Title = styled.h3`
  font-family: 'Baloo 2';
  font-weight: 800;
  font-size: 2rem;
  line-height: 1;
  color: ${({ theme }) => theme.yellow.dark};

  @media (min-width: 768px) {
    line-height: 130%;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.25rem;
  line-height: 1;
  color: ${({ theme }) => theme.typography.subtitle};

  @media (min-width: 768px) {
    line-height: 130%;
  }
`;

export const InvoiceDescriptionContainer = styled.div`
  display: flex;
  background: ${({ theme }) => theme.background};
  flex-direction: column;
  position: relative;
  padding: 2.5rem;
  border-radius: 6px 36px;
  width: 100%;
  gap: 2rem;

  &::before {
    content: '';
    position: absolute;
    top: -1px;
    left: -1px;
    right: -1px;
    bottom: -1px;
    border-radius: 6px 36px;
    z-index: -1;
    background-origin: border-box;
    background-clip: content-box, border-box;

    background: ${({ theme }) =>
      `linear-gradient(102.89deg, ${theme.yellow.main} 2.61%, ${theme.purple.main} 98.76%)`};
  }
`;

export const IllustrationContainer = styled.img`
  width: 100%;
  height: auto;
`;
