import React, { useState } from "react";
import PropTypes from "prop-types";
import { Container } from "./styles";

export default function Letter({ children }) {
  const [animate, setAnimate] = useState(false);

  return (
    <Container
      onMouseOver={() => setAnimate(true)}
      onAnimationEnd={() => setAnimate(false)}
      animate={animate}
      color="#f55"
    >
      {children}
    </Container>
  );
}

Letter.propTypes = {
  children: PropTypes.string.isRequired
};
