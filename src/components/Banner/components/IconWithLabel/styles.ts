import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const IconContainer = styled.div`
  width: 2rem;
  min-width: 2rem;
  height: 2rem;
  min-height: 2rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.white};
`;

export const LabelContainer = styled.p`
  color: ${({ theme }) => theme.typography.text};
  font-size: 1rem;
  line-height: 130%;
`;
