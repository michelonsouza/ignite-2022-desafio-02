import styled from 'styled-components';

export const RootContainer = styled.div`
  position: fixed;
  z-index: 30;
  bottom: 1rem;
  right: 1rem;
  cursor: pointer;
`;

export const SwitchContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 3rem;
`;

export const SwitchTrail = styled.div`
  position: absolute;
  height: 1rem;
  width: 3rem;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.common.hover};
`;

export const SwitchCircle = styled.div`
  display: flex;
  position: relative;
  z-index: 10;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 2rem;
  min-width: 2rem;
  height: 2rem;
  min-height: 2rem;
  transition: all 150ms ease;
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.purple.main};

  &[data-dark] {
    margin-left: calc(100% - 2rem);
  }
`;
