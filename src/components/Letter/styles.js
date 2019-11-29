import styled from "styled-components";

export const Container = styled.span`
  color: ${props => props.color};
  user-select: none;
  font-size: 3rem;
  font-weight: bold;
  display: inline-block;

  @media (min-width: 576px) {
    animation-name: ${props => (props.animate ? "rubberBand" : undefined)};
    animation-duration: 1s;
    animation-fill-mode: ease-in;

    color: ${props => props.animate && "black"};
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
