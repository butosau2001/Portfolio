import React, { useState } from "react";
import PropTypes from "prop-types";

import { Container } from "./styles";

export default function Letter({ children, color, defaultColor, index }) {
  const [animate, setAnimate] = useState(false);
  const [visible, setVisible] = useState(false);

  return children === "\n" ? (
    <br />
  ) : (
    <Container
      onMouseOver={() => setAnimate(true)}
      onAnimationEnd={() => {
        setAnimate(false);
        setVisible(true);
      }}
      animate={animate}
      visible={visible}
      space={children === " "}
      color={color}
      defaultColor={defaultColor}
      index={index}
    >
      {children}
    </Container>
  );
}

Letter.propTypes = {
  children: PropTypes.string.isRequired
};
