import styled from 'styled-components';

export const RootContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
`;

export const SingleInputContainer = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    min-width: 12.5rem;
    width: 12.5rem;
    max-width: 100%;
  }
`;

export const RowContainer = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  gap: 1rem;
  flex-direction: column;

  @media (min-width: 768px) {
    gap: 0.75rem;
    flex-direction: row;
  }
`;

export const StateContainer = styled.div`
  max-width: 8rem;

  & input {
    text-transform: uppercase;
  }

  @media (min-width: 768px) {
    min-width: 3.75rem;
    width: 3.75rem;
    max-width: 100%;
  }
`;
