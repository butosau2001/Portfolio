import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;

  .slide-enter-active {
    position: absolute;
    width: 90vw;
    height: 100vh;
    animation-name: ${props => (props.redirect ? "slideEnter" : "")};
    animation-duration: 0.3s;
    animation-timing-function: linear;
    animation-fill-mode: forwards;
  }

  .slide-exit-active {
    position: absolute;
    width: 90vw;
    height: 100vh;
    animation-name: ${props => (props.redirect ? "slideExit" : "")};
    animation-delay: 0.05s;
    animation-duration: 0.3s;
    animation-timing-function: linear;
    animation-fill-mode: forwards;
  }

  @media (max-width: 576px) {
    .slide-enter-active {
      width: 100vw;
      height: 90vh;
    }

    .slide-exit-active {
      height: 90vh;
      width: 100vw;
    }
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
`;
