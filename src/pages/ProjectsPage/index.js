import React from "react";

import { Container } from "./styles";
import CardList from "../../components/CardList";

export default function ProjectsPage({ handleModal }) {
  return (
    <Container>
      <CardList handleModal={handleModal} />
    </Container>
  );
}
