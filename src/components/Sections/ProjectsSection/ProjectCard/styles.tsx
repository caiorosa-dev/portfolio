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
  position: relative;
  border-radius: 48px;
  box-shadow: 0px 0px 50px 10px rgba(0, 0, 0, 0.05);
  max-width: 640px;

  animation: ${animationIn} 0.4s ease-out;
`;

export const Container = styled(ContainerStyle)<{ isLeaving: boolean }>`
  ${({ isLeaving }) => isLeaving && css`animation: ${animationOut} 0.4s ease-in forwards;`}
`;

export const OverlayContainer = styled.div`
  top: 0;
  left: 0;
  position: absolute;
  z-index: 2;
  width: 100%;
  max-height: 360px;
  height: 100%;
  border-top-left-radius: 48px;
  border-top-right-radius: 48px;
  background: rgb(0, 0, 0, 0.25);
  opacity: 0;
  transition: all 0.25s ease-out;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 64px;

  :hover {
    opacity: 1;
    a {
      transform: scale(1);
    }
  }

  @media (max-width: 1200px) {
    max-height: 270px;
  }

  @media (max-width: 500px) {
    max-height: 180px;
  }
`;

export const BubbleButton = styled.a`
  transform: scale(0.5);
  width: 128px;
  height: 128px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: #1E1E1E;
  color: white;
  transition: all 0.25s;
  cursor: pointer;
  font-weight: 500;

  :hover {
    background: #4F46E5;
  }

  :active {
    background: #3e38b4;
  }
`;

export const TextsContainer = styled.div`
  padding: 64px;
`;

export const Image = styled.img`
  max-width: 100%;
  width: 100%;
  border-top-left-radius: 48px;
  border-top-right-radius: 48px;
`;

export const Title = styled.h2`
  font-size: 48px;
  font-weight: 600;

  @media (max-width: 500px) {
    font-size: 32px;
  }
`;

export const Description = styled.p`
  font-weight: 500;
  font-size: 24px;
  color: #626262;

  @media (max-width: 500px) {
    font-size: 20px;
  }
`;
