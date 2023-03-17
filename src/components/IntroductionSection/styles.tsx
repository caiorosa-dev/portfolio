import styled from 'styled-components';

export const Footer = styled.footer`
  padding: 64px 240px;
  position: absolute;
  bottom: 0;

  @media (max-width: 1540px) {
    padding: 32px 120px;
  }

  @media (min-width: 768px) {
    right: 0;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Image = styled.img`
  height: 37vw;

  @media (max-width: 1540px) {
    height: 33vw;
  }

  @media (max-width: 768px) {
    height: 65vw;
  }

  @media (max-width: 500px) {
    height: 100vw;
  }
`;
