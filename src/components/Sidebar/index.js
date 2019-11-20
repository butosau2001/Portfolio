import React from "react";

import SidebarButton from "../SidebarButton";

import { Container, ButtonContainer } from "./styles";

import { FaGithub, FaLinkedin } from "react-icons/all";

export default function Sidebar(props) {
  return (
    <Container>
      {props.buttons ? (
        props.buttons.map(e => (
          <SidebarButton
            key={String(e.key)}
            title={e.title}
            icon={e.icon}
            onPress={e.onPress}
          />
        ))
      ) : (
        <></>
      )}
      {window.innerWidth > 576 && (
        <div className="absolute">
          <ButtonContainer
            onClick={() => window.open("https://github.com/butosau2001/")}
          >
            <FaGithub size="2vw" className="icon" />
          </ButtonContainer>
          <ButtonContainer
            onClick={() =>
              window.open("https://www.linkedin.com/in/bruno-borges-133564196")
            }
          >
            <FaLinkedin size="2vw" className="icon" />
          </ButtonContainer>
        </div>
      )}
    </Container>
  );
}
