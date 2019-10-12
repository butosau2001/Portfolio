import React from "react";

import { Container } from "./styles";
import Card from "../Card";

import projects from "../../data/projects";

export default function CardList() {
  return (
    <Container>
      {projects.map((e, index) => (
        <Card key={String(index)} project={e} />
      ))}
    </Container>
  );
}
