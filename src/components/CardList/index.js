import React from "react";

import { Container } from "./styles";
import Card from "../Card";

import projects from "../../data/projects";

export default function CardList({ handleModal }) {
  const dimension = Math.sqrt(projects.length);

  return (
    <Container>
      {projects.map((e, index) => (
        <Card
          key={String(index)}
          project={e}
          handleModal={handleModal}
          dimension={dimension}
        />
      ))}
    </Container>
  );
}
