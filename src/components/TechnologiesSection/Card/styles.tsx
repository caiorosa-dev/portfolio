import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 48px;

  width: 100%;

  padding: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 12px;

  transition: all 0.25s ease-out;
  :hover {
    box-shadow: 0px 0px 50px 10px rgba(0, 0, 0, 0.05);

    div {
      transition: transform 0.25s ease-out;
    }
  }
`;

export const Title = styled.h2`
  font-size: 44px;
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
