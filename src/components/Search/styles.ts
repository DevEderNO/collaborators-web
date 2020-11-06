import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #f4ede8;
  border-radius: 3px;
  border: 1px solid #232129;
  padding: 16px;
  width: 100%;
  display: flex;
  align-items: center;
  color: #666360;

  & + div {
    margin-top: 10px;
  }

  ${(props) =>
    props.isFocused &&
    css`
      color: #44619f;
      border-color: #44619f;
    `}

  input {
    background: transparent;
    flex: 1;
    border: 0;
    color: #666360;
    &::placeholder {
      color: #666360;
    }
  }
  svg {
    margin-right: 10px;
  }
`;
