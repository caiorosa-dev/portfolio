import Section from '../../Section';
import SectionContainer from '../../SectionContainer';
import Form from './Form';
import FormHeader from './FormHeader';
import { Container } from './styles';

export default function FooterSection() {
  return (
    <Section>
      <SectionContainer>
        <Container>
          <FormHeader />
          <Form />
        </Container>
      </SectionContainer>
    </Section>
  );
}
