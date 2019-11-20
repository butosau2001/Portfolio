import styled from "styled-components";

export const Container = styled.div`
  position: fixed !important;
  bottom: 2vw;
  right: 2vw;
  border-radius: 50%;

  @keyframes rotateAnimationOpen {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(90deg);
    }
  }

  @keyframes rotateAnimationClose {
    from {
      transform: rotate(90deg);
    }
    to {
      transform: rotate(0deg);
    }
  }

  .main {
    z-index: 5;
    animation-name: ${props =>
      props.animate === 1
        ? "rotateAnimationOpen"
        : props.animate === -1
        ? "rotateAnimationClose"
        : undefined};
    animation-duration: 0.5s;
    animation-timing-function: ease;
    animation-fill-mode: forwards;
  }

  .sub {
    transition: all 0.3s;
    position: absolute;
    bottom: 1vw;
    right: 1vw;
  }

  .first_activated {
    transition: all 0.3s;
    bottom: 12vh;
  }

  .second_activated {
    transition: all 0.3s;
    bottom: 22vh;
  }
`;
