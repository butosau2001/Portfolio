import React, { useState } from "react";
import { Fab } from "@material-ui/core";
import { Add, GitHub, LinkedIn } from "@material-ui/icons";

import { Container } from "./styles";

export default function FAB() {
  const [rotate, setRotation] = useState(0);
  const [activated, activateMenu] = useState(false);

  function handleRotation() {
    setRotation(activated ? -1 : 1);
    activateMenu(!activated);
    setTimeout(() => setRotation(0), 500);
  }

  return (
    <Container animate={rotate} onClick={handleRotation}>
      <Fab
        className="main"
        color="primary"
        aria-label="add"
        variant="round"
        size="large"
      >
        <Add />
      </Fab>
      <Fab
        className={activated ? "sub first_activated" : "sub"}
        color="primary"
        aria-label="add"
        variant="round"
        size="medium"
        href="https://github.com/butosau2001/"
        target="_blank"
      >
        <GitHub />
      </Fab>
      <Fab
        className={activated ? "sub second_activated" : "sub"}
        color="primary"
        aria-label="add"
        variant="round"
        size="medium"
        href="https://www.linkedin.com/in/bruno-borges-133564196"
        target="_blank"
      >
        <LinkedIn />
      </Fab>
    </Container>
  );
}
