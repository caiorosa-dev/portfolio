import { EnvelopeIcon } from '@heroicons/react/24/outline';
import Fade from 'react-reveal/Fade';
import useImagePath from '../../../../hooks/useImagePath';
import TitleText from '../../../TitleText';
import {
  Container, IconWithText, Image, Text, TextsContainer,
} from './styles';
import useTranslationText from '../../../../hooks/useTranslationText';

export default function FormHeader() {
  const [imagePath] = useImagePath('man-on-computer.png');

  return (
    <Container>
      <TextsContainer>
        <div>
          <TitleText headerText={useTranslationText('footerHeader')} title={useTranslationText('footerTitle')} />
          <Fade top cascade>
            <Text>
              {useTranslationText('footerMessage')}
            </Text>
          </Fade>
        </div>
        <IconWithText>
          <EnvelopeIcon className="icon" />
          <Fade top cascade>
            contact@caiorosadev.com
          </Fade>
        </IconWithText>
      </TextsContainer>
      <Fade top cascade>
        <Image src={imagePath} />
      </Fade>
    </Container>
  );
}
