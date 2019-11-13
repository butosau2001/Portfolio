import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  height: 100vh;
  width: 6vw;
  background-color: #333;

  display: flex;
  flex-direction: column;
  justify-content: center;

  z-index: 100;

  .absolute {
    position: absolute;
    left: 0;
    bottom: 2vw;
    width: 6vw;
  }
`;

export const ButtonContainer = styled.div`
  margin: 1rem 0 0 2vw;

  .icon {
    color: #888;
  }

  :hover {
    cursor: pointer;

    .icon {
      color: #1976d2;
    }
  }
`;
