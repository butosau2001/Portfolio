import React, { useState } from "react";
import PropTypes from "prop-types";

import { Container } from "./styles";
import { colors } from "../../globalStyles";

export default function Letter({ children, index }) {
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
      color={colors.letterColor}
      index={index}
    >
      {children}
    </Container>
  );
}

Letter.propTypes = {
  children: PropTypes.string.isRequired
};
