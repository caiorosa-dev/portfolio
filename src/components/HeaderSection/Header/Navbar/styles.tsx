import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  gap: 32px;
  justify-content: center;
  align-items: center;

  .icon {
    height: 36px;
  }

  button {
    display: flex;
    align-items: center;
    color: white;

    @media (max-width: 768px) {
      color: #1E1E1E;
    }

    background: none;
    height: 100%;
  }
`;

export const LangButton = styled.button`
  font-size: 20px;
  margin: 0;
  padding: 0;

  z-index: 5;
`;
