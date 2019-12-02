import React, { useState } from "react";

import { Container, TextContainer } from "./styles";

import Letter from "../../components/Letter";

export default function HomePage() {
  const [text] = useState("Olá,\nMeu nome é Bruno.");

  return (
    <Container>
      <div>
        <TextContainer>
          {text.split("").map((c, i) => (
            <Letter key={String(i)} index={i}>
              {c}
            </Letter>
          ))}
        </TextContainer>
        <h3>React / React Native developer</h3>
      </div>
    </Container>
  );
}
