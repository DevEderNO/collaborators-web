import { lighten } from 'polished';
import styled from 'styled-components';

export const Container = styled.main`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 700px;
  align-items: center;
  justify-content: center;

  form {
    margin: 20px 0;
    width: 340px;
    text-align: center;
  }

  > span {
    width: 100%;
  }

  .my-facebook-button-class {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 3px;
    border: 0;
    padding: 16px;
    width: 100%;
    margin-top: 16px;
    font-weight: 500;
    transition: background-color 0.2s;
    text-align: center;

    background: #fff;
    border: solid 1px #44619f;
    color: #312e38;

    i {
      margin-right: 16px;
      color: #44619f;
    }

    &:hover {
      background: ${lighten(0.4, '#44619f')};
    }
  }
`;
