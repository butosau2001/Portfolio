import React, { useState, useEffect } from "react";
import { MdHome, MdRemoveRedEye, MdEmail } from "react-icons/md";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import { Container, PageContainer } from "./styles";

import Sidebar from "../../components/Sidebar";

import HomePage from "../HomePage";
import ProjectsPage from "../ProjectsPage";
import ContactPage from "../ContactPage";

import "./transition.css";

export default function MainPage() {
  const sel = "#1976D2";
  const nsel = "#888";

  const [location, setLocation] = useState(
    localStorage.getItem("current_path") || "/"
  );

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  function handleClick(route) {
    setLoading(true);
    setLocation(route);
    localStorage.setItem("current_path", route);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }

  function redirect() {
    return <Redirect to={location} push />;
  }

  const buttons = [
    {
      key: 1,
      title: "HOME",
      icon: <MdHome color={location === "/" ? sel : nsel} size="2vw" />,
      onPress: () => handleClick("/")
    },
    {
      key: 2,
      title: "PROJECTS",
      icon: (
        <MdRemoveRedEye
          color={location === "/projects" ? sel : nsel}
          size="2vw"
        />
      ),
      onPress: () => handleClick("/projects")
    },
    {
      key: 3,
      title: "CONTACT",
      icon: <MdEmail color={location === "/contact" ? sel : nsel} size="2vw" />,
      onPress: () => handleClick("/contact")
    }
  ];

  return (
    <>
      <Container>
        <div>
          <Sidebar buttons={buttons} />
        </div>
        <div className="page">
          <Router>
            {redirect()}
            <Route
              render={({ location: l }) => (
                <TransitionGroup className="page">
                  <CSSTransition key={l.key} classNames="slide" timeout={300}>
                    <>
                      <Switch location={l}>
                        <Route exact path="/">
                          <PageContainer>
                            <HomePage />
                          </PageContainer>
                        </Route>
                        <Route path="/projects">
                          <PageContainer>
                            <ProjectsPage />
                          </PageContainer>
                        </Route>
                        <Route path="/contact">
                          <PageContainer>
                            <ContactPage />
                          </PageContainer>
                        </Route>
                      </Switch>
                    </>
                  </CSSTransition>
                </TransitionGroup>
              )}
            />
          </Router>
        </div>
      </Container>
    </>
  );
}
