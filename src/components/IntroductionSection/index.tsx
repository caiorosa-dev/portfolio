import { EnvelopeIcon } from '@heroicons/react/24/outline';
import Fade from 'react-reveal/Fade';
import Button from '../Button';
import Section from '../Section';
import SectionContainer from '../SectionContainer';
import TitleText from '../TitleText';
import { Footer, Image } from './styles';

import ManOnRocketImage from '../../assets/images/man-on-rocket.png';
import DownArrowText from '../DownArrowText';

export default function IntroductionSection() {
  return (
    <Section>
      <SectionContainer>
        <Fade top>
          <Image src={ManOnRocketImage} alt="Man on a rocket" />
        </Fade>

        <TitleText headerText="But, what I do?" title="I want to make\nyour dreams\navailable to\nthe world!" margin={16}>
          <Fade top>
            <Button type="button">
              <EnvelopeIcon className="icon" />
              <Fade top cascade>Contact Me</Fade>
            </Button>
          </Fade>
        </TitleText>
      </SectionContainer>

      <Footer>
        <DownArrowText>Keep Scrolling</DownArrowText>
      </Footer>
    </Section>
  );
}
