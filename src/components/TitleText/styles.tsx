import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  color: #1E1E1E;
  font-size: 72px;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 64px;
  }

  @media (max-width: 500px) {
    font-size: 48px;
  }
`;

const TitlesStyle = styled.div``;

export const Titles = styled(TitlesStyle)<{ margin?: number }>`
  margin-bottom: ${({ margin }) => `${margin}px`};
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 16px;
`;

export const Text = styled.span`
  color: #4F46E5;
  font-weight: 500;
  font-size: 24px;
`;

export const Line = styled.hr`
  height: 2px;
  background: #4F46E5;
  width: 48px;
`;
