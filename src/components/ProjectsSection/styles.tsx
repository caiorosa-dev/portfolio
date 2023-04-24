import styled from 'styled-components';
import SectionContainer from '../SectionContainer';

export const Container = styled(SectionContainer)`
  flex-direction: column;
  align-items: start;
  gap: 72px;
`;

export const NavBar = styled.nav`
  display: flex;
  list-style: none;
  gap: 72px;
`;

export const ProjectsContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-wrap: wrap;
  row-gap: 128px;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
`;

const NavItemStyle = styled.li`
  font-size: 24px;
  font-weight: 500;

  cursor: pointer;
  transition: all 0.25s ease-out;

  :hover {
    color: #626262;
  }
`;

export const NavItem = styled(NavItemStyle)<{ selected?: boolean }>`
  border-bottom: ${({ selected }) => (selected ? '2px #4F46E5 solid' : '2px #ffffff solid')};
`;
