/* eslint-disable global-require */
import { useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Section from '../Section';
import TitleText from '../TitleText';
import {
  Container, NavBar, NavItem, ProjectsContainer,
} from './styles';
import ProjectCard from './ProjectCard';
import { Category, Project } from './types';
import useAnimatedListByCategory from '../../hooks/useAnimatedListByCategory';

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState('0');
  const [categories, setCategories] = useState([] as Category[]);
  const {
    setItems: setProjects,
    renderList,
    handleSelectCategory,
  } = useAnimatedListByCategory([] as Project[]);

  function isSelected(categoryId: string) {
    return selectedCategory === categoryId;
  }

  function selectCategory(categoryId: string) {
    setSelectedCategory(categoryId);
    handleSelectCategory(categoryId);
  }

  useEffect(() => {
    async function loadFiles() {
      const loadedCategories = await import('../../assets/data/categories.json');
      const loadedProjects = await import('../../assets/data/projects.json');
      setSelectedCategory('0');

      setCategories(loadedCategories.default);
      setProjects(loadedProjects.default);
    }

    loadFiles();
  }, [setProjects]);

  return (
    <Section>
      <Container>
        <header>
          <TitleText headerText="My portfolio" title="Look at my projects" />
          <NavBar>
            <Fade top cascade>
              <NavItem key="0" selected={isSelected('0')} onClick={() => selectCategory('0')}>
                <Fade top cascade>
                  All
                </Fade>
              </NavItem>
            </Fade>
            {categories.map((category) => (
              <NavItem
                key={category.id}
                selected={isSelected(category.id)}
                onClick={() => selectCategory(category.id)}
              >
                <Fade top cascade>
                  {category.name}
                </Fade>
              </NavItem>
            ))}
          </NavBar>
        </header>
        <ProjectsContainer>
          { renderList((project, { animatedRef, isLeaving }) => (
            <ProjectCard
              key={project.id}
              project={project}
              animationRef={animatedRef}
              isLeaving={isLeaving}
            />
          )) }
        </ProjectsContainer>
      </Container>
    </Section>
  );
}
