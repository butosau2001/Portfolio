import styled from "styled-components";
import { colors } from "../../globalStyles";

export const Container = styled.div`
  display: flex;
  flex: 1;

  justify-content: center;
  align-items: center;

  background-color: ${colors.background};
`;

export const TextContainer = styled.div`
  width: 45vw;
  justify-content: center;
  text-align: center;
`;
