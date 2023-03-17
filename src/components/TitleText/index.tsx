/* eslint-disable react/no-array-index-key */
import Fade from 'react-reveal/Fade';

import {
  Container, HeaderContainer, Line, Text, Title,
} from './styles';

type Props = {
  headerText: string;
  title: string;
  children?: any;
  maxWidth?: number;
  mediaWidth?: number;
  margin?: number;
};

export default function TitleText({
  headerText, title, children = null, maxWidth, margin, mediaWidth,
}: Props) {
  return (
    <Container maxWidth={maxWidth} mediaWidth={mediaWidth}>
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

      <Title margin={margin}>
        <Fade top cascade>
          { title }
        </Fade>
      </Title>

      {children}
    </Container>
  );
}
