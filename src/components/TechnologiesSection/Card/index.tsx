import Fade from 'react-reveal/Fade';
import {
  Container, IconBackground, List, Title,
} from './styles';

type Props = {
  name: string;
  icon: string;
  color: string;
  children: any;
};

export default function Card({
  name, icon, color, children,
}: Props) {
  return (
    <Container>
      <Fade top cascade>
        <IconBackground color={color}>
          <img src={icon} alt="Ícone" />
        </IconBackground>
      </Fade>

      <Title>
        <Fade top cascade>
          {name}
        </Fade>
      </Title>

      <List>
        {children}
      </List>
    </Container>
  );
}
