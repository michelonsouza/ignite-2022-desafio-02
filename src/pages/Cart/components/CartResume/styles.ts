import styled from 'styled-components';

const breakPoint = '@media (min-width: 768px)';

export const RootContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductRootContainer = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.common.button};
`;

export const ProductContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
  margin: 1.5rem 0;
  padding: 0 0.25rem;
`;

export const ImageContainer = styled.img`
  width: 4rem;
  height: 4rem;
`;

export const ProductInfoContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  flex-direction: column;

  ${breakPoint} {
    gap: 1rem;
    flex-direction: row;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const InfoTitle = styled.p`
  font-size: 1rem;
  line-height: 1;
  color: ${({ theme }) => theme.typography.subtitle};

  ${breakPoint} {
    line-height: 130%;
  }
`;

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  & > div:first-of-type {
    min-width: 5.75rem;
  }
`;

export const RemoveButton = styled.button`
  height: 2rem;
  border-radius: 6px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  border: 0;
  gap: 0.24rem;
  color: ${({ theme }) => theme.typography.text};
  background-color: ${({ theme }) => theme.common.button};
  transition: opacity 150ms ease;

  &:hover {
    opacity: 0.8;
  }

  & > svg {
    color: ${({ theme }) => theme.purple.main};
  }
`;

export const ItemAmountContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: flex-start;

  ${breakPoint} {
    justify-content: flex-end;
    min-width: 4.5rem;
  }

  & > p {
    font-family: 'Baloo 2';
    font-weight: 700;
    font-size: 1rem;
    line-height: 1;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.typography.text};

    ${breakPoint} {
      line-height: 130%;
    }
  }
`;

export const CartTotalsInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1.5rem 0;
  gap: 0.84375rem;
`;

export const CartTotalInfoItem = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > * {
    font-size: 0.875rem;
    line-height: 1;
    color: ${({ theme }) => theme.typography.text};

    ${breakPoint} {
      line-height: 130%;
    }
  }
`;

export const CartTotal = styled(CartTotalInfoItem)`
  & > * {
    font-size: 1.25rem;
    font-weight: 700;
  }
`;

export const NoItems = styled(CartTotal)`
  width: 100%;
  justify-content: center;
  margin-bottom: 1rem;

  & > * {
    display: flex;
    font-size: 1.5rem;
    align-items: center;
    gap: 0.25rem;
  }
`;

export const ConfirmFinishInvoiceButton = styled.button`
  border: 0;
  border-radius: 6px;
  height: 2.875rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.yellow.main};
  transition: opacity 150ms ease;
  text-transform: uppercase;

  &:hover:not(:disabled) {
    opacity: 0.8;
  }

  :disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }
`;
