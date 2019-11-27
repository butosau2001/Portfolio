import React, { useState, useEffect } from "react";
import { MdHome, MdRemoveRedEye, MdEmail } from "react-icons/md";

import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import Routes from "../../routes";

import { Container } from "./styles";
import { colors } from "../../globalStyles";

import Sidebar from "../../components/Sidebar";
import FAB from "../../components/FAB";

export default function MainPage() {
  const [location, setLocation] = useState(window.location.pathname);

  const [redirect, setRedirect] = useState(false);

  useEffect(() => {}, []);

  function redirectPage() {
    return <Redirect to={location} />;
  }

  function handleClick(route) {
    setRedirect(true);
    setLocation(route);
  }

  const buttons = [
    {
      key: 1,
      title: "HOME",
      icon: (
        <MdHome
          color={location === "/" ? colors.selected : colors.notSelected}
          size={window.innerWidth < 576 ? "3vh" : "2vw"}
        />
      ),
      onPress: () => handleClick("/")
    },
    {
      key: 2,
      title: "PROJECTS",
      icon: (
        <MdRemoveRedEye
          color={
            location === "/projects" ? colors.selected : colors.notSelected
          }
          size={window.innerWidth < 576 ? "3vh" : "2vw"}
        />
      ),
      onPress: () => handleClick("/projects")
    },
    {
      key: 3,
      title: "CONTACT",
      icon: (
        <MdEmail
          color={location === "/contact" ? colors.selected : colors.notSelected}
          size={window.innerWidth < 576 ? "3vh" : "2vw"}
        />
      ),
      onPress: () => handleClick("/contact")
    }
  ];

  return (
    <>
      <Container>
        <div>
          <Sidebar buttons={buttons} className="sidebar" />
        </div>
        <div className="page">
          <Router>
            {redirectPage()}
            <Route
              render={({ location: l }) => (
                <Routes location={l} redirect={redirect} />
              )}
            />
          </Router>
        </div>
        {window.innerWidth < 576 && <FAB id="absolute" />}
      </Container>
    </>
  );
}
