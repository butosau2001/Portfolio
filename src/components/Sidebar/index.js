import React from "react";

import SidebarButton from "../SidebarButton";

import { Container } from "./styles";

export default function Sidebar(props) {
  return (
    <Container>
      {props.buttons ? (
        props.buttons.map(e => (
          <SidebarButton
            key={String(e.key)}
            title={e.title}
            icon={e.icon}
            onPress={e.onPress}
          />
        ))
      ) : (
        <></>
      )}
    </Container>
  );
}
