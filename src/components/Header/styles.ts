import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 20px 20px;
  display: flex;
  justify-content: flex-end;
  background: #a4c8f8;
  height: 35vh;

  button {
    background: #fff;
    border-radius: 50%;
    margin: 15px;
    border: 0;
    height: 40px;
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      cursor: pointer;
    }
  }
`;
