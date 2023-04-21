import styled, { css, keyframes } from 'styled-components';

const animationIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(100px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const animationOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(100px);
  }
`;

const ContainerStyle = styled.div`
  border-radius: 48px;
  box-shadow: 0px 0px 50px 10px rgba(0, 0, 0, 0.05);

  animation: ${animationIn} 0.4s ease-out;
`;

export const Container = styled(ContainerStyle)<{ isLeaving: boolean }>`
  ${({ isLeaving }) => isLeaving && css`animation: ${animationOut} 0.4s ease-in forwards;`}
`;

export const TextsContainer = styled.div`
  padding: 64px;
`;

export const Image = styled.img`
  position: relative;
  max-height: 360px;
  border-top-left-radius: 48px;
  border-top-right-radius: 48px;

  @media (max-width: 1200px) {
    max-height: 240px;
  }

  @media (max-width: 500px) {
    max-height: 200px;
  }
`;

export const Title = styled.h2`
  font-size: 48px;
  font-weight: 600;
`;

export const Description = styled.p`
  font-weight: 500;
  font-size: 24px;
  color: #626262;
`;
