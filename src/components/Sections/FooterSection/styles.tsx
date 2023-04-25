import styled from 'styled-components';
import Section from '../../Section';

export const StyledSection = styled(Section)`
  margin-top: 108px;
`;

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

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 1200px) {
    justify-content: center;
    flex-direction: column;
  }
`;

export const FooterContainer = styled.div`
  margin-top: 192px;
  background: #1E1E1E;
  width: 100%;
  padding: 108px 128px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FooterText = styled.p`
  font-size: 24px;
  font-weight: 24px;
  color: white;
`;

export const BackToTop = styled(FooterText)`
  transition: all 0.25s ease-out;

  :hover {
    cursor: pointer;
    opacity: 0.5;
  }
`;
