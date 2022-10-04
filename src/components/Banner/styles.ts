import styled from 'styled-components';

import bannerBackground from '@/assets/images/hero-background.png';
import bannerImage from '@/assets/images/hero.png';

import { Container } from '../Container';

export const HeroContainer = styled(Container)`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 3.5rem;
  margin: 0 auto;
  padding: 0;
  position: relative;
  z-index: 10;

  & *:not([data-background]) {
    z-index: 10;
  }

  @media (min-width: 768px) {
    grid-template-columns: 1.3fr 1fr;
    padding: 5.75rem 0;
  }
`;

export const HeroBackground = styled.div`
  position: absolute;
  z-index: 1;
  background-image: url(${bannerBackground});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
  filter: blur(30px);
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 10;
  gap: 1rem;

  @media (min-width: 768px) {
    gap: 4.125rem;
  }
`;

export const InfoTopContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
`;

export const InfoTitle = styled.h1`
  font-family: 'Baloo 2';
  font-weight: 800;
  font-size: 3rem;
  line-height: 1;
  color: ${({ theme }) => theme.typography.title};

  @media (min-width: 768px) {
    line-height: 130%;
  }
`;

export const InfoSubtitle = styled.p`
  color: ${({ theme }) => theme.typography.subtitle};
  font-size: 1.25rem;
`;

export const HeroImageContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 22.5rem;
  background-image: url(${bannerImage});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  position: relative;
  z-index: 1 !important;

  position: absolute;
  opacity: 0.1;

  @media (min-width: 768px) {
    position: initial;
    opacity: 1;
    z-index: inherit !important;
  }
`;

export const SubInfosContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 0.5rem;
  position: relative;

  @media (min-width: 768px) {
    grid-template-columns: 0.7fr 1fr;
    grid-gap: 1.25rem 2.5rem;
  }
`;
