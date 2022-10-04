import styled from 'styled-components';

export const RootContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
`;

export const SingleInputContainer = styled.div`
  min-width: 12.5rem;
  width: 12.5rem;
  max-width: 100%;
`;

export const RowContainer = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  gap: 0.75rem;
`;

export const StateContainer = styled.div`
  max-width: 100%;
  min-width: 3.75rem;
  width: 3.75rem;

  & input {
    text-transform: uppercase;
  }
`;
