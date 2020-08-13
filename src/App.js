import React from "react";
// Components
import Background from "./components/Background";
import Navbar from "./components/Navbar";
import SplashPage from "./components/SplashPage";
import AboutMe from "./components/AboutMe";
import ProjectPage from "./components/ProjectPage";
import SkillsPage from "./components/SkillsPage";
import ContactPage from "./components/ContactPage";
import Footer from "./components/Footer";
// Material UI
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

function App() {
  const Styles = useStyles();

  return (
    <Box className={Styles.root}>
      <Background />
      <Navbar />
      <SplashPage />
      <AboutMe />
      <ProjectPage />
      <SkillsPage />
      <ContactPage />
      <Footer />
    </Box>
  );
}

export default App;

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "0rem 1rem"
  }
});
