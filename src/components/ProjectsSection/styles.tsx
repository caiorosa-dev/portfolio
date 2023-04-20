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
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 128px;
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
