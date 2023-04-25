import styled, { css } from 'styled-components';

const StyledTextArea = styled.textarea`
  width: 508px;
  padding: 26px 32px;
  font-size: 24px;
  border: 2px solid #E1E1E1;
  background: #EEEEEE;
  border-radius: 24px;
  transition: all 0.25s ease-out;
  appearance: none;

  ::placeholder {
    color: #626262;
  }

  :focus {
    background: #fff;
    border-color: #4F46E5;
  }

  :disabled {
    background-color: #E1E1E1;
    border-color: #626262;
  }

  @media (max-width: 600px) {
    font-size: 16px;
    width: 100%;
  }
`;

export default styled(StyledTextArea)<{ error: string }>`
  ${({ error }) => error && css`
    border-color: #EF4444 !important;
    color: #EF4444;
    opacity: 1;
  `}
`;
