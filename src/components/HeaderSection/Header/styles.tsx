import styled from 'styled-components';

export const Container = styled.header`
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 100%;

  padding: 32px 120px;

  @media (max-width: 768px) {
    position: relative;
  }

  @media (max-width: 500px) {
    padding: 32px 64px;
  }

  @media (max-width: 400px) {
    padding: 16px;
  }
`;

export const LogoText = styled.h1`
  font-size: 48px;
  color: black;
  letter-spacing: 8px;
`;
