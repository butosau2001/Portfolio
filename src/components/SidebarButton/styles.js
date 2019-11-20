import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 1em 0;
  margin: 1rem auto;

  justify-content: center;
  align-items: center;

  position: relative;

  cursor: pointer;

  div {
    opacity: 1;
    transition: opacity 0.2s ease-in;
    position: absolute;
  }

  p {
    opacity: 0;
    transition: opacity 0.2s ease-out;
    font-size: calc(1vw + 0.35rem);
    font-weight: bold;
    color: #aaa;
  }

  @media (max-width: 576px) {
    margin: auto 1rem;
  }

  @media (hover: hover) {
    :hover {
      div {
        opacity: 0;
        transition: opacity 0.2s ease-out;
      }

      p {
        opacity: 1;
        transition: opacity 0.2s ease-in;

        font-size: calc(1vw + 0.35rem);
        font-weight: bold;

        color: #aaa;
      }
    }
  }
`;
