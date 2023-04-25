import { EnvelopeIcon } from '@heroicons/react/24/outline';
import Fade from 'react-reveal/Fade';
import Button from '../../Button';
import Section from '../../Section';
import SectionContainer from '../../SectionContainer';
import TitleText from '../../TitleText';
import { Footer, Image } from './styles';

import DownArrowText from '../../DownArrowText';
import useTranslationText from '../../../hooks/useTranslationText';
import useImagePath from '../../../hooks/useImagePath';

export default function IntroductionSection() {
  const [imagePath] = useImagePath('man-on-rocket.png');

  return (
    <Section>
      <SectionContainer>
        <Fade top>
          <Image src={imagePath} alt="Man on a rocket" />
        </Fade>

        <TitleText headerText={useTranslationText('introductionHeaderText')} title={useTranslationText('introductionTitle')} margin={16}>
          <Fade top>
            <Button type="button">
              <EnvelopeIcon className="icon" />
              <Fade top cascade>{useTranslationText('introductionButton')}</Fade>
            </Button>
          </Fade>
        </TitleText>
      </SectionContainer>

      <Footer>
        <DownArrowText>{useTranslationText('introductionScrollMessage')}</DownArrowText>
      </Footer>
    </Section>
  );
}
