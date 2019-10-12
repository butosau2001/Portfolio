import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: ${props => props.color};

  background-image: ${props => `url(${props.image})` || "undefined"};
  background-size: 100vh;

  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;

  flex-basis: 20vw;

  transition: all 0.2s ease-in-out;

  padding: 0 0.5em;

  :hover {
    background-color: #555;
    color: #aaa;
  }

  h1 {
    font-size: 3.5vw;
    text-decoration-line: underline;
  }

  h2 {
    font-size: 1.2vw;
    text-align: center;
  }
`;
