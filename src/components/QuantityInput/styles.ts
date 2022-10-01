import styled from 'styled-components';

export const QuantityInputContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  background-color: ${({ theme }) => theme.common.button};
  border-radius: 6px;
  min-height: 2rem;

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
