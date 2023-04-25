import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 64px 128px;
  box-shadow: 0px 5px 50px 10px rgba(0, 0, 0, 0.05);
  border-radius: 72px;

  @media (max-width: 1200px) {
    padding: 0;
    box-shadow: none;
  }
`;
