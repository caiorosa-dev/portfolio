import styled from 'styled-components';

export const Section = styled.section`
  position: relative;
  height: 100vh;

  @media (max-width: 768px) {
    height: 150vh;
  }
  width: 100%;
`;

export const Background = styled.div`
  position: absolute;
  right: 0;
  width: 33%;
  height: 100%;
  z-index: -1;

  @media (max-width: 768px) {
    bottom: 0;
    width: 100%;
    height: 50%;
  }

  background: #4F46E5;
`;

export const Footer = styled.footer`
  padding: 64px 240px;
  position: absolute;
  bottom: 0;

  @media (max-width: 768px) {
    bottom: 67.5vh;
  }
`;

export const Image = styled.img`
  height: 44vw;
  rotate: -11deg;
  transform: translateX(110px);

  @media (max-width: 1540px) {
    height: 37vw;
    rotate: 5deg;
    transform: translateX(100px);
  }

  @media (max-width: 768px) {
    height: 65vh;
    rotate: 5deg;
    transform: translateX(0);
    transform: translateY(-160px);
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 32px 240px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1540px) {
    padding: 32px 120px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 120px;
  }
`;
