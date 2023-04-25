import Fade from 'react-reveal/Fade';
import Section from '../../Section';
import TitleText from '../../TitleText';
import Card from './Card';
import { Container, CardList } from './styles';

import useTranslationText from '../../../hooks/useTranslationText';
import useImagePath from '../../../hooks/useImagePath';

export default function TechnologiesSection() {
  const [flashPath] = useImagePath('flash.png');
  const [computerPath] = useImagePath('computer.png');
  const [gearPath] = useImagePath('gear.png');

  return (
    <Section>
      <Container>
        <TitleText headerText={useTranslationText('technologiesHeader')} title={useTranslationText('technologiesTitle')} />
        <CardList>
          <Card name="Langs & Tools" icon={flashPath} color="#EF4444">
            <Fade top cascade>
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>Typescript</li>
              <li>Git</li>
              <li>Yarn</li>
              <li>VS Code</li>
              <li>Figma</li>
            </Fade>
          </Card>

          <Card name="Front End" icon={computerPath} color="#4F46E5">
            <Fade top cascade>
              <li>ReactJS</li>
              <li>VueJS</li>
              <li>NuxtJS</li>
              <li>Axios</li>
              <li>SASS</li>
              <li>TailwindCSS</li>
              <li>Styled Components</li>
            </Fade>
          </Card>

          <Card name="Back End" icon={gearPath} color="#38BDF8">
            <Fade top cascade>
              <li>AdonisJS</li>
              <li>Express</li>
              <li>MySQL</li>
              <li>PostgreSQL</li>
              <li>MongoDB</li>
              <li>Docker</li>
              <li>Render</li>
              <li>Vercel</li>
            </Fade>
          </Card>
        </CardList>
      </Container>
    </Section>
  );
}
