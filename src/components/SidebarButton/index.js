import React from "react";

import { Container } from "./styles";

export default function SidebarButton(props) {
  return (
    <Container onClick={props.onPress}>
      <p>{props.title}</p>
      <div>{props.icon}</div>
    </Container>
  );
}
