import React, { useState } from "react";
import { MdHome, MdRemoveRedEye, MdEmail } from "react-icons/md";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import { Container } from "./styles";

import Sidebar from "../../components/Sidebar";

import HomePage from "../HomePage";
import ProjectsPage from "../ProjectsPage";
import ContactPage from "../ContactPage";

export default function MainPage() {
  const [location, setLocation] = useState(
    localStorage.getItem("current_path") || "/"
  );

  function handleClick(route) {
    setLocation(route);
    localStorage.setItem("current_path", route);
  }

  function redirect() {
    return <Redirect to={location} />;
  }

  const buttons = [
    {
      key: 1,
      title: "HOME",
      icon: <MdHome color={location === "/" ? "#1976D2" : "#888"} size="2vw" />,
      onPress: () => handleClick("/")
    },
    {
      key: 2,
      title: "PROJECTS",
      icon: (
        <MdRemoveRedEye
          color={location === "/projects" ? "#1976D2" : "#888"}
          size="2vw"
        />
      ),
      onPress: () => handleClick("/projects")
    },
    {
      key: 3,
      title: "CONTACT",
      icon: (
        <MdEmail
          color={location === "/contact" ? "#1976D2" : "#888"}
          size="2vw"
        />
      ),
      onPress: () => handleClick("/contact")
    }
  ];

  return (
    <Container>
      <div>
        <Sidebar buttons={buttons} />
      </div>
      <div className="page">
        <Router>
          {redirect()}
          <Switch>
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
        </Router>
      </div>
    </Container>
  );
}
