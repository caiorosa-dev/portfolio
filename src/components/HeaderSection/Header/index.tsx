import Fade from 'react-reveal/Fade';
import Navbar from './Navbar';
import { Container, LogoText } from './styles';

export default function Header() {
  return (
    <Container>
      <LogoText>
        <Fade top cascade>
          CR.
        </Fade>
      </LogoText>
      <Navbar />
    </Container>
  );
}
