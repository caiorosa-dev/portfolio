import { Bars2Icon } from '@heroicons/react/24/outline';
import Fade from 'react-reveal/Fade';
import { Container } from './styles';
import LangButton from './LangButton';

export default function Navbar() {
  return (
    <Container>
      <LangButton />
      <Fade top cascade>
        <button type="button"><Bars2Icon className="icon" /></button>
      </Fade>
    </Container>
  );
}
