import styled from 'styled-components';

const Button = styled.button`
  width: 288px;
  height: 88px;
  color: white;
  background: #4F46E5;
  border-radius: 24px;
  font-size: 24px;
  font-weight: 300;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  transition: all 0.2s ease-in;

  .icon {
    height: 24px;
  }

  :hover {
    background: #756ff1;
  }

  :active {
    background: #3f38b8;
  }

  :focus {
    background: #3f38b8;
  }
`;

export default Button;
