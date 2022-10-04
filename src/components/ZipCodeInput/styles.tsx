import { IMaskMixin } from 'react-imask';
import styled from 'styled-components';

export const RootContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  width: 100%;
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 2.625rem;
  width: 100%;
  border-radius: 4px;
  transition: all 150ms ease;
  overflow: hidden;
  background: ${({ theme }) => theme.common.input};
  border: 1px solid ${({ theme }) => theme.common.button};

  &:focus-within {
    border-color: ${({ theme }) => theme.yellow.dark};
  }

  & > input {
    width: 100%;
    height: 100%;
    border: 0;
    padding: 0 0.75rem;
    font-size: 0.875rem;
    background-color: transparent;
    color: ${({ theme }) => theme.typography.text};

    &::placeholder {
      color: ${({ theme }) => theme.typography.label};
    }

    &:required::placeholder::after {
      content: '*';
      color: ${({ theme }) => theme.red.main};
    }
  }
`;

export const OptionalLabel = styled.span`
  display: block;
  position: absolute;
  right: 0.75rem;
  font-size: 0.75rem;
  font-style: italic;
  color: ${({ theme }) => theme.typography.label};
`;

export const HelperText = styled.p`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.typography.label};

  &[class*='error'] {
    color: ${({ theme }) => theme.red.main};
  }
`;

const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  border: 0;
  padding: 0 0.75rem;
  font-size: 0.875rem;
  background-color: transparent;
  color: ${({ theme }) => theme.typography.text};

  &::placeholder {
    color: ${({ theme }) => theme.typography.label};
  }

  &:required::placeholder::after {
    content: '*';
    color: ${({ theme }) => theme.red.main};
  }
`;

export const MaskedStyledInput = IMaskMixin<
  any,
  false,
  string,
  HTMLInputElement
>(({ inputRef, ...props }) => (
  <StyledInput {...(props as any)} ref={inputRef} />
));
