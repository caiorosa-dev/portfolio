import { ChatBubbleBottomCenterTextIcon, EnvelopeIcon, UserIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import Fade from 'react-reveal/Fade';
import Input from '../../../Input';
import FormGroup from './FormGroup';
import { Container } from './styles';
import Button from '../../../Button';
import TextArea from '../../../TextArea';
import useTranslationText from '../../../../hooks/useTranslationText';

export default function Form() {
  const [isHovering, setIsHovering] = useState({});

  function handleFocus(index: number) {
    setIsHovering((prevState) => {
      return { ...prevState, [index]: true };
    });
  }

  function handleFocusOut(index: number) {
    setIsHovering((prevState) => {
      return { ...prevState, [index]: false };
    });
  }

  return (
    <Container>
      <Fade top>
        <FormGroup error="" isHovering={isHovering[1]}>
          <Input type="text" error="" placeholder={useTranslationText('formName')} onFocus={() => handleFocus(1)} onBlur={() => handleFocusOut(1)} disabled />
          <UserIcon className="form-icon" />
        </FormGroup>
      </Fade>
      <Fade top>
        <FormGroup error="" isHovering={isHovering[2]}>
          <Input type="email" error="" placeholder={useTranslationText('formEmail')} onFocus={() => handleFocus(2)} onBlur={() => handleFocusOut(2)} disabled />
          <EnvelopeIcon className="form-icon" />
        </FormGroup>
      </Fade>
      <Fade top>
        <FormGroup error="" isHovering={isHovering[3]}>
          <TextArea error="" placeholder={useTranslationText('formMessage')} onFocus={() => handleFocus(3)} onBlur={() => handleFocusOut(3)} rows={8} disabled />
          <ChatBubbleBottomCenterTextIcon className="form-icon" />
        </FormGroup>
      </Fade>
      <Fade top>
        <Button disabled>
          {/* <EnvelopeIcon className="icon" /> */}
          <Fade top cascade>
            {useTranslationText('formSubmitButton')}
          </Fade>
        </Button>
      </Fade>
    </Container>
  );
}
