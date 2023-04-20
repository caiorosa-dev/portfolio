import Fade from 'react-reveal/Fade';
import Section from '../Section';
import TitleText from '../TitleText';
import Card from './Card';
import { Container, CardList } from './styles';

import FlashIcon from '../../assets/images/flash.png';
import ComputerIcon from '../../assets/images/computer.png';
import GearIcon from '../../assets/images/gear.png';

export default function TechnologiesSection() {
  return (
    <Section>
      <Container>
        <TitleText headerText="About my work" title="Technologies that i use" />
        <CardList>
          <Card name="Langs & Tools" icon={FlashIcon} color="#EF4444">
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

          <Card name="Front End" icon={ComputerIcon} color="#4F46E5">
            <Fade top cascade>
              <li>ReactJS</li>
              <li>NextJS</li>
              <li>VueJS</li>
              <li>NuxtJS</li>
              <li>TailwindCSS</li>
              <li>Axios</li>
              <li>SASS</li>
            </Fade>
          </Card>

          <Card name="Back End" icon={GearIcon} color="#38BDF8">
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
