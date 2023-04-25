import styled from 'styled-components';

const ContainerStyle = styled.div`
  small {
    color: #EF4444;
    font-size: 12px;
    display: block;
    margin-top: 8px;
  }

  .form-item {
    position: relative;

    .form-icon {
      height: 32px;
      position: absolute;
      right: 32px;
      top: 28px;
      color: #626262;
    }

    input:focus {
      .form-icon {
        color: red;
      }
    }
  }
`;

export const Container = styled(ContainerStyle)<{ isHovering: boolean, error: string }>`
  .form-item {
    .form-icon {
      color: ${({ isHovering }) => isHovering && '#4F46E5'};
      color: ${({ error }) => error && '#EF4444'};
    }
  }
`;
