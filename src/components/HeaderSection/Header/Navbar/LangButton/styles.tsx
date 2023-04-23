import styled from 'styled-components';

export const Button = styled.button`
  z-index: 5;

  font-size: 20px;
  margin: 0;
  padding: 0;

  cursor: pointer;
  transition: all 0.25s ease-out;
  border-bottom: 2px solid transparent;

  :hover {
    border-bottom: 2px solid white;
  }
`;
