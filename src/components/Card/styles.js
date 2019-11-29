import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: ${props => props.color};

  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;

  min-width: calc(80vw / ${props => Math.ceil(props.dimension)});
  min-height: calc(100vh / ${props => Math.ceil(props.dimension)});

  transition: all 0.2s ease-in-out;

  padding: 0 0.5em;

  opacity: 1;

  @media (min-width: 576px) {
    :hover {
      cursor: pointer;
      opacity: 0.6;
    }
  }

  @media (max-width: 576px) {
    min-width: 100vw;
    min-height: 0;
  }

  h1 {
    font-size: 2rem;
    text-decoration-line: underline;
  }

  h2 {
    font-size: 1rem;
    text-align: center;
  }
`;
