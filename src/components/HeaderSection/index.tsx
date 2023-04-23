import Header from './Header';
import {
  Background, Footer, Image, LargerSection,
} from './styles';

import RocketImage from '../../assets/images/rocket.png';
import TitleText from '../TitleText';
import DownArrowText from '../DownArrowText';
import SectionContainer from '../SectionContainer';
import useTranslationText from '../../hooks/useTranslationText';

export default function HeaderSection() {
  return (
    <LargerSection>
      <Header />
      <Background />

      <SectionContainer>
        <TitleText headerText="Caio Rosa" title={useTranslationText('headerTitle')} />

        <Image src={RocketImage} alt="Rocket 3d illustration" />
      </SectionContainer>

      <Footer>
        <DownArrowText>{useTranslationText('headerScrollDown')}</DownArrowText>
      </Footer>
    </LargerSection>
  );
}
