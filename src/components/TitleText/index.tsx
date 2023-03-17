import { ReactNode } from 'react';
import Fade from 'react-reveal/Fade';

import {
  Container, HeaderContainer, Line, Text, Title,
} from './styles';

type Props = {
  headerText: string;
  title: string;
  children?: ReactNode;
};

export default function TitleText({ headerText, title, children = null }: Props) {
  return (
    <Container>
      <Fade top cascade>
        <HeaderContainer>
          <Line />

          <Text>{headerText}</Text>
        </HeaderContainer>
      </Fade>

      <Title>
        <Fade top cascade>
          { title }
        </Fade>
      </Title>
      {children}
    </Container>
  );
}
