import styled, { css } from 'styled-components';
import { shade, lighten } from 'polished';

interface ContainerProps {
  variant: string;
  hasIcon?: boolean;
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
  justify-content: center;

  ${(props) =>
    props.variant === 'secondary' &&
    css`
      background: #fff;
      border: solid 1px #44619f;
      color: #312e38;
    `}

  span {
    text-align: center;
    background: transparent;
    border: 0;
  }

  svg {
    ${(props) =>
      props.hasIcon &&
      css`
        margin-right: 16px;
      `}
  }

  &:hover {
    ${(props) =>
      props.variant === 'secondary'
        ? css`
            background: ${lighten(0.4, '#44619f')};
          `
        : css`
            background: ${shade(0.2, '#44619f')};
          `}
  }
`;
