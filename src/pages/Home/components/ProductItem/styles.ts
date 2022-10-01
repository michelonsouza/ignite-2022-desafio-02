import styled from 'styled-components';

interface ProductImageProps {
  imgUrl: string;
}

export const CardContainer = styled.div`
  padding: 1.25rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 6px 35px;
  background-color: ${({ theme }) => theme.common.card};
`;

export const ProductImage = styled.div<ProductImageProps>`
  width: 7.5rem;
  height: 7.5rem;
  margin-top: -2.6rem;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${({ imgUrl }) => imgUrl});
`;

export const TagsContainer = styled.div`
  margin-top: 0.75rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

export const Tag = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: fit-content;
  height: 1.315rem;
  border-radius: 10.5px;
  background-color: ${({ theme }) => theme.yellow.light};
  color: ${({ theme }) => theme.yellow.dark};
  text-transform: uppercase;
  font-weight: 700;
  font-size: 0.625rem;
  line-height: 1;
  padding: 0 0.5rem;
  white-space: nowrap;

  @media (min-width: 768px) {
    line-height: 130%;
  }
`;

export const ProductTitle = styled.h1`
  font-family: 'Baloo 2';
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 1;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.typography.title};

  @media (min-width: 768px) {
    line-height: 130%;
  }
`;

export const ProductInfo = styled.p`
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1;
  margin-bottom: 2.0625rem;
  text-align: center;
  color: ${({ theme }) => theme.typography.label};

  @media (min-width: 768px) {
    line-height: 130%;
  }
`;

export const ProductAmountInfoContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

export const PriceContainer = styled.div`
  display: flex;
  align-items: baseline;
  color: ${({ theme }) => theme.typography.text};
  gap: 0.25rem;

  & span {
    display: block;
    max-width: fit-content;
  }

  & > span:first-of-type {
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 1;

    @media (min-width: 768px) {
      line-height: 130%;
    }
  }
  & > span:last-of-type {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 1.5rem;
    line-height: 1;

    @media (min-width: 768px) {
      line-height: 130%;
    }
  }
`;

export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  max-width: 54%;

  @media (min-width: 768px) {
    max-width: 64%;
  }

  & > * {
    height: 2.375rem;
    border-radius: 6px;
  }
`;

export const QuantityInputContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  background-color: ${({ theme }) => theme.common.button};

  & > input {
    border: 0;
    width: 100%;
    height: 100%;
    background-color: transparent;
    text-align: center;
    color: ${({ theme }) => theme.typography.title};

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    /* Firefox */
    &[type='number'] {
      -moz-appearance: textfield;
    }
  }

  & > button {
    background: transparent;
    border: 0;
    position: absolute;
    z-index: 10;
    width: 1.5rem;
    height: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    transition: background-color 150ms ease, color 150ms ease,
      box-shadow 150ms ease;
    color: ${({ theme }) => theme.purple.main};

    &:hover {
      background-color: ${({ theme }) => theme.purple.main};
      color: ${({ theme }) => theme.white};
      box-shadow: 0 0 0 2px ${({ theme }) => theme.purple.main};
    }

    &:focus {
      outline: 0;
      box-shadow: 0 0 0 2px ${({ theme }) => theme.purple.main};
    }

    &:first-of-type {
      left: 0.25rem;
    }

    &:last-of-type {
      right: 0.25rem;
    }

    &:disabled {
      opacity: 0.8;
    }
  }
`;

export const AddCartButton = styled.button`
  border: 0;
  width: 2.375rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 150ms ease;
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.purple.dark};

  &:hover {
    opacity: 0.8;
  }
`;
