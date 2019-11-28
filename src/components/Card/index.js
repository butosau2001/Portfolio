import React from "react";

import { Container } from "./styles";

export default function Card({ project, handleModal, dimension }) {
  return (
    <Container
      dimension={dimension}
      color={project.color}
      onClick={() => handleModal(project) /*window.open(project.link)*/}
    >
      <h1>{project.title}</h1>
      <h2>{project.subtitle}</h2>
    </Container>
  );
}
