import styled from "styled-components";

export const Container = styled.span`
  color: ${props => props.defaultColor || "white"};
  font-size: 3rem;
  font-weight: bold;
  display: inline-block;

  animation-name: grow;
  animation-duration: 0.5s;
  animation-delay: ${props => 0.1 * props.index}s;

  padding: ${props => (props.space ? "0.3rem" : "0")};

  visibility: ${props => (props.visible ? "visible" : "hidden")};

  @media (min-width: 576px) {
    animation-name: grow, ${props => (props.animate ? "rubberBand" : undefined)};
    animation-duration: 0.2s, 1s;
    animation-delay: ${props => 0.1 * props.index}s, 0s;
    animation-fill-mode: ease-in;
    color: ${props => props.animate && props.color};
  }

  @keyframes grow {
    from {
      visibility: hidden;
      transform: scale(0);
      opacity: 0;
    }

    to {
      visibility: visible;
      transform: scale(1);
      opacity: 1;
    }
  }

  @keyframes rubberBand {
    0% {
      transform: scale3d(1, 1, 1);
    }
    30% {
      transform: scale3d(1.25, 0.75, 1);
    }
    40% {
      transform: scale3d(0.75, 1.25, 1);
    }
    50% {
      transform: scale3d(1.15, 0.85, 1);
    }
    65% {
      transform: scale3d(0.95, 1.05, 1);
    }
    75% {
      transform: scale3d(1.05, 0.95, 1);
    }
    100% {
      transform: scale3d(1, 1, 1);
    }
  }
`;
