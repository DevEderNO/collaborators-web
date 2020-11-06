import styled, { css } from 'styled-components';
import { shade, lighten } from 'polished';

interface ContainerProps {
  variant: string;
}

export const Container = styled.button<ContainerProps>`
  display: flex;
  align-items: center;
  background: #44619f;
  border-radius: 3px;
  border: 0;
  padding: 16px;
  width: 100%;
  color: #fff;
  margin-top: 16px;
  font-weight: 500;
  transition: background-color 0.2s;

  ${(props) =>
    props.variant === 'secondary' &&
    css`
      background: #fff;
      border: solid 1px #44619f;
      color: #312e38;
    `}

  svg {
    margin-right: 16px;
  }

  span {
    text-align: center;
    width: 100%;
    background: transparent;
    border: 0;
  }

  &:hover {
    ${(props) =>
      props.variant === 'secondary'
        ? css`
            background: ${lighten(0.2, '#44619f')};
          `
        : css`
            background: ${shade(0.2, '#44619f')};
          `}
  }
`;
