import styled, { css } from 'styled-components';
import { lighten } from 'polished';

interface IButtonFilterProps {
  selected: boolean;
}

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 800px;
  padding: 20px;
  border: 1px solid #666360;
  border-radius: 5px;
  margin-top: -150px;
  background: #fff;
  max-height: 80vh;

  header {
    > div {
      display: flex;
      align-items: center;

      > div {
        margin-right: 15px;
      }

      + div {
        margin-top: 10px;
      }

      > button {
        width: fit-content;
        margin-top: 0;
      }
    }
  }

  section {
    display: flex;
    flex: 1;
    margin: 10px 0;
    overflow-y: auto;
  }

  footer {
    display: flex;
    justify-content: center;

    button {
      border-radius: 50%;
      padding: 10px;
      border: thin solid;
    }
  }
`;

export const ButtonFilter = styled.button<IButtonFilterProps>`
  border: 1px solid #666360;
  background: #fff;
  border-radius: 12px;
  padding: 5px 15px;

  + button {
    margin-left: 10px;
  }

  ${(props) =>
    props.selected &&
    css`
      border-color: #44619f;
      background: #44619f;
      color: #fff;
    `}

  &:hover {
    ${(props) =>
      !props.selected &&
      css`
        background: ${lighten(0.5, '#44619f')};
      `}
  }
`;

export const CollaboratorsList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(360px, 1fr));
  grid-gap: 10px;

  justify-content: center;
`;

export const CollaboratorsItem = styled.div`
  display: flex;
  border: 1px solid #666360;
  height: fit-content;
  padding: 10px;
  width: 100%;
  min-width: 360px;
  border-radius: 3px;
  cursor: pointer;

  img {
    width: 75px;
    height: 75px;
    border-radius: 50%;
  }

  > div {
    margin-left: 10px;
    display: flex;
    flex-direction: column;
  }
`;
