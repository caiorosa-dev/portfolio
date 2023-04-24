import Fade from 'react-reveal/Fade';
import { Ref } from 'react';
import useImagePath from '../../../hooks/useImagePath';
import { Project } from '../types';
import {
  BubbleButton,
  Container, Description, Image, OverlayContainer, TextsContainer, Title,
} from './styles';
import useTranslationText from '../../../hooks/useTranslationText';

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
      <OverlayContainer className="project-overlay">
        <BubbleButton href={project.githubLink} target="_blank"><Fade top cascade>{useTranslationText('projectGithubButton')}</Fade></BubbleButton>
        <BubbleButton href={project.previewLink} target="_blank"><Fade top cascade>{useTranslationText('projectPreviewButton')}</Fade></BubbleButton>
      </OverlayContainer>
    </Container>
  );
}

export default ProjectCard;
