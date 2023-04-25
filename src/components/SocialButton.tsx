import styled from 'styled-components';

export default styled.a`
  width: 320px;
  display: flex;
  padding: 32px 0;
  border-radius: 24px;
  font-size: 24px;
  font-weight: 500;
  background: #fff;
  color: #626262;
  transition: all 0.25s;
  justify-content: center;
  border: 2px solid #fff;

  :hover {
    color: white;
    background: #4F46E5;
  }

  :focus {
    border: 2px solid #4F46E5;
  }
`;
