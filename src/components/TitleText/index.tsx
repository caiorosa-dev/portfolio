/* eslint-disable react/no-array-index-key */
import Fade from 'react-reveal/Fade';

import {
  Container, HeaderContainer, Line, Text, Title, Titles,
} from './styles';

type Props = {
  headerText: string;
  title: string;
  children?: any;
  margin?: number;
};

export default function TitleText({
  headerText, title, children = null, margin,
}: Props) {
  return (
    <Container>
      <Fade top cascade>
        <HeaderContainer>
          <Line />

          <Text>
            <Fade top cascade>
              {headerText}
            </Fade>
          </Text>

        </HeaderContainer>
      </Fade>

      <Titles margin={margin}>
        { title.split('\\n').map((value, i) => (
          <Fade top cascade>
            <Title key={i}>{value}</Title>
          </Fade>
        )) }
      </Titles>

      {children}
    </Container>
  );
}
