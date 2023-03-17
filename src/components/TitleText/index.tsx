/* eslint-disable react/no-array-index-key */
import React, { ReactNode } from 'react';
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

          <Text>
            <Fade top cascade>
              {headerText}
            </Fade>
          </Text>

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
