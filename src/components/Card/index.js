import React from "react";

import { Container } from "./styles";

export default function Card({ project }) {
  return (
    <Container
      color={project.color}
      image={project.uri}
      onClick={() => window.open(project.link)}
    >
      <h1>{project.title}</h1>
      <h2>{project.description}</h2>
    </Container>
  );
}
