import React, { useState, useEffect } from "react";
import {
  MdHome,
  MdRemoveRedEye,
  MdEmail,
  MdArrowForward
} from "react-icons/md";
import { Modal, Grow, Backdrop } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import Routes from "../../routes";

import {
  Container,
  ModalContainer,
  Title,
  Subtitle,
  Description
} from "./styles";
import { colors } from "../../globalStyles";

import Sidebar from "../../components/Sidebar";
import FAB from "../../components/FAB";

const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

export default function MainPage() {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [location, setLocation] = useState(window.location.pathname);

  const [project, setProject] = useState(null);

  useEffect(() => {}, []);

  function redirectPage() {
    return <Redirect to={location} />;
  }

  function handleClick(route) {
    setRedirect(true);
    setLocation(route);
  }

  function handleModal(openProject) {
    setProject(openProject);
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
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
                <Routes
                  location={l}
                  redirect={redirect}
                  handleModal={handleModal}
                />
              )}
            />
          </Router>
        </div>
        {window.innerWidth < 576 && <FAB id="absolute" />}
        <Modal
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{ timeout: 500 }}
        >
          <Grow in={open}>
            {project && (
              <ModalContainer>
                <div>
                  <Title>{project.title}</Title>
                  <Subtitle>{project.subtitle}</Subtitle>
                  <Description>{project.description}</Description>
                </div>
                <div className="image">
                  <img
                    src={project.image}
                    alt="Portfolio"
                    height={Math.min(
                      window.innerHeight * 0.2,
                      window.innerWidth * 0.3
                    )}
                  />
                </div>
                <div className="link" onClick={() => window.open(project.link)}>
                  <Subtitle>
                    {project.link.includes("github")
                      ? "Ir para o GitHub"
                      : "Ir para o site"}
                    <MdArrowForward
                      size={window.innerWidth < 576 ? "0.7rem" : "1rem"}
                    />
                  </Subtitle>
                </div>
              </ModalContainer>
            )}
          </Grow>
        </Modal>
      </Container>
    </>
  );
}
