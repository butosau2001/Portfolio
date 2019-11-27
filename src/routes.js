import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";

import { Container } from "./styles";

export default function Routes({ location: l, redirect }) {
  return (
    <Container redirect={redirect}>
      <TransitionGroup className="page">
        <CSSTransition key={l.key} classNames={"slide"} timeout={350}>
          <>
            <Switch location={l}>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route path="/projects">
                <ProjectsPage />
              </Route>
              <Route path="/contact">
                <ContactPage />
              </Route>
            </Switch>
          </>
        </CSSTransition>
      </TransitionGroup>
    </Container>
  );
}
