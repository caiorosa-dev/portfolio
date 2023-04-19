import { ArrowDownIcon } from '@heroicons/react/24/outline';
import Fade from 'react-reveal/Fade';

import { ReactNode } from 'react';
import { Container } from './styles';

type Props = {
  children: ReactNode
};

export default function DownArrowText({ children }: Props) {
  return (
    <Container>
      <ArrowDownIcon className="icon" />
      <span>
        <Fade top cascade>{ children }</Fade>
      </span>
    </Container>
  );
}
