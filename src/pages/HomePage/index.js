import React, { useState } from "react";

import { Container, TextContainer } from "./styles";

import Letter from "../../components/Letter";

export default function HomePage() {
  const [text] = useState(
    "Reprehenderit in magna aute mollit qui Lorem qui amet elit excepteur occaecat nisi."
  );

  return (
    <Container>
      <TextContainer>
        {text.split("").map((c, i) => (
          <Letter key={String(i)}>{c}</Letter>
        ))}
      </TextContainer>
    </Container>
  );
}
