import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
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
`;
