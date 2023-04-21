import Fade from 'react-reveal/Fade';
import { Ref } from 'react';
import useImagePath from '../../../hooks/useImagePath';
import { Project } from '../types';
import {
  Container, Description, Image, TextsContainer, Title,
} from './styles';

type Props = {
  project: Project;
  animationRef: Ref<any>;
  isLeaving: boolean;
};

function ProjectCard({ project, animationRef, isLeaving }: Props) {
  const [imagePath] = useImagePath(`projects/${project.image}`);

  return (
    <Container ref={animationRef} isLeaving={isLeaving}>
      <Image src={imagePath} />
      <TextsContainer>
        <Title><Fade top cascade>{ project.name }</Fade></Title>
        <Fade top cascade><Description>{ project.description }</Description></Fade>
      </TextsContainer>
    </Container>
  );
}

export default ProjectCard;
