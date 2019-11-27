import React, { useState, useEffect } from "react";
import { MdHome, MdRemoveRedEye, MdEmail } from "react-icons/md";

import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import Routes from "../../routes";

import { Container } from "./styles";

import Sidebar from "../../components/Sidebar";
import FAB from "../../components/FAB";

export default function MainPage() {
  const sel = "#1976D2";
  const nsel = "#888";

  const [location, setLocation] = useState(window.location.pathname);

  const [redirect, setRedirect] = useState(false);

  useEffect(() => {}, []);

  function redirectPage() {
    return <Redirect to={location} />;
  }

  function handleClick(route) {
    setRedirect(true);
    setLocation(route);
    setTimeout(() => setRedirect(false), 500);
  }

  const buttons = [
    {
      key: 1,
      title: "HOME",
      icon: (
        <MdHome
          color={location === "/" ? sel : nsel}
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
          color={location === "/projects" ? sel : nsel}
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
          color={location === "/contact" ? sel : nsel}
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
