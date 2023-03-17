import styled from 'styled-components';

export const Container = styled.div`
  box-shadow: 0px 0px 50px 10px rgba(0, 0, 0, 0.05);
  border-radius: 48px;

  width: 424px;

  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 12px;
`;

const IconBackgroundStyle = styled.div`
  width: 256px;
  height: 256px;
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;

  .icon {
    height: 192px;
  }
`;

export const IconBackground = styled(IconBackgroundStyle)<{ color: string }>`
  background: ${({ color }) => color};
`;

export const Title = styled.h2`
  font-size: 48px;
  font-weight: 500;
  color: #1E1E1E;
  text-align: center;
`;

export const List = styled.ul`
  list-style: none;
  text-align: center;
  color: #626262;
  font-size: 20px;
`;
