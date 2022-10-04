import styled from 'styled-components';

export const RootContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 2rem;

  & > button {
    flex: 1;
  }

  @media (min-width: 768px) {
    align-items: center;
    flex-direction: row;
  }
`;

export const PaymentModeContainer = styled.button`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.75rem;
  font-weight: 400;
  padding: 1rem;
  transition: all 150ms ease;
  border-radius: 6px;
  text-transform: uppercase;
  white-space: nowrap;
  background-color: ${({ theme }) => theme.common.button};
  border: 1px solid ${({ theme }) => theme.common.button};
  color: ${({ theme }) => theme.typography.text};
  box-shadow: none;

  & > svg {
    color: ${({ theme }) => theme.purple.main};
  }

  &:hover {
    background-color: ${({ theme }) => theme.common.hover};
    border: 1px solid ${({ theme }) => theme.common.hover};
  }

  &[data-active] {
    cursor: initial;
    background-color: ${({ theme }) => theme.purple.light};
    border: 1px solid ${({ theme }) => theme.purple.main};
  }
`;
