import { ArrowDownIcon } from '@heroicons/react/24/outline';
import { ReactNode } from 'react';
import { Container } from './styles';

type Props = {
  children: ReactNode
};

export default function DownArrowText({ children }: Props) {
  return (
    <Container>
      <ArrowDownIcon className="icon" />
      <span>{ children }</span>
    </Container>
  );
}
