import styled from "styled-components";
import { colors } from "../../globalStyles";

export const Container = styled.div`
  display: flex;
  flex: 1;

  justify-content: center;
  align-items: center;

  background-color: ${colors.background};

  div {
    h3 {
      color: ${colors.notSelected};
    }
  }
`;

export const TextContainer = styled.div`
  width: 45vw;
  justify-content: center;
  text-align: left;
`;
