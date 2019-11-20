import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  div {
    position: relative;
  }

  .page {
    position: relative;
    display: flex;
    flex: 1;
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

  .slide-enter-active {
    animation-name: slideEnter;
    animation-duration: 0.3s;
    animation-timing-function: linear;
    animation-fill-mode: forwards;
  }

  .slide-exit-active {
    animation-name: slideExit;
    animation-duration: 0.3s;
    animation-timing-function: linear;
    animation-fill-mode: forwards;
  }

  @keyframes slideEnter {
    from {
      transform: translateX(-100vw);
    }
    to {
      transform: translateX(0vw);
    }
  }

  @keyframes slideExit {
    from {
      transform: translateX(0vw);
    }
    to {
      transform: translateX(100vw);
    }
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
