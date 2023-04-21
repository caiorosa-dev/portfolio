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
  width: 100%;
  display: grid;
  grid-gap: 72px;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
`;
