import styled from 'styled-components';

export const DescribeContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
`;

export const DescribeTitle = styled.p`
  font-size: 1rem;
  line-height: 1;
  color: ${({ theme }) => theme.typography.subtitle};

  @media (min-width: 768px) {
    line-height: 130%;
  }
`;

export const DescribeSubtitle = styled(DescribeTitle)`
  color: ${({ theme }) => theme.typography.text};
  font-size: 0.875rem;
`;
