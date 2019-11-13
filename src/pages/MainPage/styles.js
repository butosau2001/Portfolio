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
  }

  .hidden {
    position: absolute;
    visibility: hidden;
  }
`;

// export const PageContainer = styled.div`
//   display: flex;
//   width: 100vw;
// `;

export const ButtonContainer = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
`;
