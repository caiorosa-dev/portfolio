import styled from 'styled-components';

const SectionContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 32px 240px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1540px) {
    padding: 32px 120px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 120px;
  }

  @media (max-width: 500px) {
    padding: 0 32px;
  }

  @media (max-width: 400px) {
    padding: 0 16px;
  }
`;

export default SectionContainer;
