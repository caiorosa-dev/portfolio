import styled from 'styled-components';

export const Section = styled.section`
  position: relative;
  height: 100vh;
  width: 100%;
`;

export const Background = styled.div`
  position: absolute;
  right: 0;
  width: 33%;
  height: 100%;
  z-index: -1;

  background: #4F46E5;
`;

export const Footer = styled.footer`
  padding: 64px 240px;
  position: absolute;
  bottom: 0;
`;

export const Image = styled.img`
  height: 880px;
  rotate: -11deg;
  transform: translateX(120px);
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 32px 240px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
