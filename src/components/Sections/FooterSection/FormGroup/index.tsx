import { ReactNode } from 'react';
import { Container } from './styles';

type Props = {
  children: ReactNode;
  error: string;
  isHovering: boolean;
};

export default function FormGroup({ children, error, isHovering }: Props) {
  return (
    <Container isHovering={isHovering} error={error}>
      <div className="form-item">
        { children }
      </div>
      { error && <small>{ error }</small> }
    </Container>
  );
}
