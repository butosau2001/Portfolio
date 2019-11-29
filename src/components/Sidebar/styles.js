import styled from "styled-components";

import { colors } from "../../globalStyles";

export const Container = styled.div`
  position: fixed;
  height: 100vh;
  width: 10vw;
  background-color: ${colors.headerBackground};

  display: flex;
  flex-direction: column;
  justify-content: center;

  z-index: 100;

  .absolute {
    position: absolute;
    left: 0;
    bottom: 2vw;
    width: 10vw;
  }

  @media (max-width: 576px) {
    flex-direction: row;
    height: 10vh;
    width: 100vw;
  }
`;

export const ButtonContainer = styled.div`
  margin: auto 0 auto 2vw;

  .icon {
    color: ${colors.notSelected};
  }

  @media (hover: hover) {
    :hover {
      cursor: pointer;

      .icon {
        color: ${colors.selected};
      }
    }
  }
`;
