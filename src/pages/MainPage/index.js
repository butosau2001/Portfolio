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

export default function MainPage() {
  const [selectedPage, setSelectedPage] = useState(1);
  const [route, setRoute] = useState("/");

  function handleClick(id, route) {
    setSelectedPage(id);
    setRoute(route);
  }

  function redirect() {
    return <Redirect to={route} />;
  }

  const buttons = [
    {
      key: 1,
      title: "HOME",
      icon: (
        <MdHome color={selectedPage === 1 ? "#1976D2" : "#888"} size="2vw" />
      ),
      onPress: () => handleClick(1, "/")
    },
    {
      key: 2,
      title: "PROJECTS",
      icon: (
        <MdRemoveRedEye
          color={selectedPage === 2 ? "#1976D2" : "#888"}
          size="2vw"
        />
      ),
      onPress: () => handleClick(2, "/projects")
    },
    {
      key: 3,
      title: "CONTACT",
      icon: (
        <MdEmail color={selectedPage === 3 ? "#1976D2" : "#888"} size="2vw" />
      ),
      onPress: () => handleClick(3, "/contact")
    }
  ];
  return (
    <Container>
      <div>
        <Sidebar buttons={buttons}></Sidebar>
      </div>
      <div class="page">
        <Router>
          {redirect()}
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/projects">
              <div>
                <p>projects</p>
              </div>
            </Route>
            <Route path="/contact">
              <div>
                <p>contact</p>
              </div>
            </Route>
          </Switch>
        </Router>
      </div>
    </Container>
  );
}
