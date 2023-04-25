import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1200px) {
    flex-direction: column-reverse;
  }
`;

export const TextsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 48px;
`;

export const IconWithText = styled.a`
  display: flex;
  align-items: center;
  color: #1E1E1E;
  font-size: 24px;

  .icon {
    height: 32px;
    margin-right: 16px;
    color: #4F46E5;
  }
`;

export const Text = styled.p`
  margin-top: 10px;
  max-width: 75%;
  font-size: 24px;
  color: #626262;
`;

export const Image = styled.img`
  max-width: 600px;
  width: 100%;

  @media (max-width: 1200px) {
    max-width: 500px;
  }

  @media (max-width: 500px) {
    max-width: 240px;
  }
`;
