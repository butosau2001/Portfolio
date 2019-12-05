import React, { useState, useEffect } from "react";

import { Container, TextContainer, Submessage } from "./styles";

import Letter from "../../components/Letter";
import { colors } from "../../globalStyles";

export default function HomePage() {
  const [text] = useState("Olá,\nMeu nome é Bruno.");
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowMessage(true), (text.length - 1) * 100);
  }, [text]);

  return (
    <Container>
      <div>
        <TextContainer>
          {text.split("").map((c, i) => (
            <Letter
              key={String(i)}
              index={i}
              color={colors.letterColor}
              defaultColor="white"
            >
              {c}
            </Letter>
          ))}
        </TextContainer>
        <Submessage showMessage={showMessage}>
          React / React Native developer
        </Submessage>
      </div>
    </Container>
  );
}
