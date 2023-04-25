import useTranslationText from '../../../hooks/useTranslationText';
import SectionContainer from '../../SectionContainer';
import SocialButton from '../../SocialButton';
import Form from './Form';
import FormHeader from './FormHeader';
import {
  BackToTop,
  ButtonsContainer, Container, FooterContainer, FooterText, StyledSection,
} from './styles';

export default function FooterSection() {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  function copyToClipboard(text: string) {
    navigator.clipboard.writeText(text);
    // eslint-disable-next-line no-alert
    alert(`Copied: ${text}`);
  }

  return (
    <StyledSection>
      <SectionContainer>
        <Container>
          <FormHeader />
          <Form />
          <ButtonsContainer>
            <SocialButton href="https://www.linkedin.com/in/caiorosa-dev/" target="_blank">Linkedin</SocialButton>
            <SocialButton href="https://github.com/caiorosa-dev" target="_blank">Github</SocialButton>
            <SocialButton onClick={() => copyToClipboard('Caio Rosa#9999')}>Discord</SocialButton>
          </ButtonsContainer>
        </Container>
      </SectionContainer>
      <FooterContainer>
        <FooterText>{useTranslationText('footerMadeByMessage')}</FooterText>
        <BackToTop onClick={scrollToTop}>{useTranslationText('backToTopText')}</BackToTop>
      </FooterContainer>
    </StyledSection>
  );
}
