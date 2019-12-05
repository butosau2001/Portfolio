import React from "react";

import { Container } from "./styles";
import { TextField } from "@material-ui/core";

export default function Input({
  className,
  value,
  placeholder,
  valid,
  multiline,
  onChange
}) {
  return (
    <Container valid={valid}>
      <TextField
        className={className}
        variant="filled"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        multiline={multiline || false}
        required
      />
    </Container>
  );
}
