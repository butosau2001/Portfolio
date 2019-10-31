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

  .loading {
    display: flex;
    height: 100vh;
    width: 100vw;

    @keyframes in {
      from {
        position: -100vw;
      }
    }
  }

  .hidden {
    position: absolute;
    visibility: hidden;
  }
`;

export const PageContainer = styled.div`
  display: flex;
`;
