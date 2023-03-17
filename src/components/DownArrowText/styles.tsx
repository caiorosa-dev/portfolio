import styled, { keyframes } from 'styled-components';

const levitate = keyframes`
  0% {
    transform: translateY(0);
    opacity: 0.25;
  }

  50% {
    transform: translateY(-7px);
    opacity: 1;
  }

  100% {
    transform: translateY(0);
    opacity: 0.25;
  }
`;

export const Container = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  color: #1E1E1E;
  cursor: default;
  animation: ${levitate} 1.5s ease-in-out infinite;

  .icon {
    height: 24px;
  }

  span {
    font-size: 24px;
  }
`;
