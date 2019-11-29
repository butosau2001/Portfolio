import styled from "styled-components";
import { colors } from "../../globalStyles";

export const Container = styled.div`
  display: flex;
  flex: 1;

  background-color: ${colors.background};
  @media (max-width: 576px) {
    overflow: auto !important;
  }
`;
