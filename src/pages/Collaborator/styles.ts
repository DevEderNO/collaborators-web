import styled from 'styled-components';

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
    display: flex;
    justify-content: flex-end;

    button {
      width: fit-content;
      margin-top: 0;
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
