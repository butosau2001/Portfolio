import React, { useState } from "react";
import { MdHome, MdRemoveRedEye, MdEmail } from "react-icons/md";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Sidebar from "../../components/Sidebar";

export default function MainPage() {
  const [selectedPage, setSelectedPage] = useState(1);

  function handleClick(id, route) {
    setSelectedPage(1);
  }

  const buttons = [
    {
      key: 1,
      title: "HOME",
      icon: (
        <MdHome color={selectedPage === 1 ? "#1976D2" : "#888"} size="2em" />
      ),
      onPress: () => setSelectedPage(1)
    },
    {
      key: 2,
      title: "PROJECTS",
      icon: (
        <MdRemoveRedEye
          color={selectedPage === 2 ? "#1976D2" : "#888"}
          size="2em"
        />
      ),
      onPress: () => setSelectedPage(2)
    },
    {
      key: 3,
      title: "CONTACT",
      icon: (
        <MdEmail color={selectedPage === 3 ? "#1976D2" : "#888"} size="2em" />
      ),
      onPress: () => setSelectedPage(3)
    }
  ];
  return (
    <div>
      <Sidebar buttons={buttons}></Sidebar>
      <Router ref={input => (this.router = input)}>
        <Switch>
          <Route exact path="/">
            <div>home</div>
          </Route>
          <Route path="/projects">
            <div>projects</div>
          </Route>
          <Route path="/contact">
            <div>contact</div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
