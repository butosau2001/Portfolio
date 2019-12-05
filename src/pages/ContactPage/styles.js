import styled from "styled-components";
import { colors } from "../../globalStyles";

export const Container = styled.div`
  display: flex;
  flex: 1;

  justify-content: center;
  align-items: center;

  background-color: ${colors.background};

  form {
    padding: 1rem;

    .row {
      display: flex;
      flex-direction: row;
    }

    .title {
      margin: 0 1rem;
    }

    .submit {
      margin: 1rem;

      border-color: ${colors.selected};
      color: ${colors.selected};

      transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
        color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
        box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
        border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

      :hover {
        background-color: ${colors.selected};
        color: white;
      }
    }
  }
`;
