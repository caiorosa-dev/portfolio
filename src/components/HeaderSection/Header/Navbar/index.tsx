import { Bars2Icon } from '@heroicons/react/24/outline';
import Fade from 'react-reveal/Fade';
import { Container, LangButton } from './styles';

export default function Navbar() {
  return (
    <Container>
      <LangButton type="button">
        <Fade top cascade>
          English
        </Fade>
      </LangButton>
      <Fade top cascade>
        <button type="button"><Bars2Icon className="icon" /></button>
      </Fade>
    </Container>
  );
}
