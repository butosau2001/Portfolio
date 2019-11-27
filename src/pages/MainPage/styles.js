import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  div {
    position: relative;
  }

  .hidden {
    position: absolute;
    visibility: hidden;
  }

  .absolute {
    position: absolute;
    bottom: 1vw;
    right: 1vw;
  }

  .page {
    position: relative;
    display: flex;
    flex: 1;
  }

  @media (max-width: 576px) {
    .page {
      width: 100vw;
      height: 90vh;
    }

  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

export const ButtonContainer = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
`;
