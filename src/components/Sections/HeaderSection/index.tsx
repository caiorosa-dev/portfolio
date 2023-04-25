import Header from './Header';
import {
  Background, Footer, Image, LargerSection,
} from './styles';

import TitleText from '../../TitleText';
import DownArrowText from '../../DownArrowText';
import SectionContainer from '../../SectionContainer';
import useTranslationText from '../../../hooks/useTranslationText';
import useImagePath from '../../../hooks/useImagePath';

export default function HeaderSection() {
  const [imagePath] = useImagePath('rocket.png');

  return (
    <LargerSection>
      <Header />
      <Background />

      <SectionContainer>
        <TitleText headerText="Caio Rosa" title={useTranslationText('headerTitle')} />

        <Image src={imagePath} alt="Rocket 3d illustration" />
      </SectionContainer>

      <Footer>
        <DownArrowText>{useTranslationText('headerScrollDown')}</DownArrowText>
      </Footer>
    </LargerSection>
  );
}
