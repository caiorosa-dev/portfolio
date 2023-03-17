import Header from './Header';
import {
  Background, Container, Footer, Image, Section,
} from './styles';

import RocketImage from '../../assets/images/rocket.png';
import TitleText from '../TitleText';
import DownArrowText from '../DownArrowText';

export default function HeaderSection() {
  return (
    <Section>
      <Header />
      <Background />

      <Container>
        <TitleText headerText="Caio Rosa" title="Hello, I am aFull Stack   Developer." />

        <Image src={RocketImage} alt="Rocket 3d illustration" />
      </Container>

      <Footer>
        <DownArrowText>Scroll Down</DownArrowText>
      </Footer>
    </Section>
  );
}
