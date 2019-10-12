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
    font-size: 1vw;
    font-weight: bold;
    color: #aaa;
  }

  :hover {
    div {
      opacity: 0;
      transition: opacity 0.2s ease-out;
    }

    p {
      opacity: 1;
      transition: opacity 0.2s ease-in;

      font-size: 1vw;
      font-weight: bold;

      color: #aaa;
    }
  }
`;
