import styled from 'styled-components';
import SectionContainer from '../SectionContainer';

export const Container = styled(SectionContainer)`
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 48px;
`;

export const CardList = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 64px;

  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;
