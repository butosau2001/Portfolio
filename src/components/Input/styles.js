import styled from "styled-components";

export const Container = styled.div`
  .input {
    margin: 1rem;
    width: 20vw;

    .MuiFilledInput-underline:after {
      border-bottom: 2px solid ${props => (props.valid ? "#3f51b5" : "red")};
    }

    input {
      color: lightgray;
    }
  }

  .full {
    width: calc(40vw + 2rem);

    textarea {
      box-sizing: border-box;
      overflow: auto !important;
      color: lightgray;
      min-height: 40vh;
      height: 40vh !important;
    }
  }
`;
