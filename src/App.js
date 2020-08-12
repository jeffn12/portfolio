import React from "react";
// Components
import { Box, Container } from "@material-ui/core";
import Background from "./components/Background";
import Navbar from "./components/Navbar";
import SplashPage from "./components/SplashPage";
import AboutMe from "./components/AboutMe";
import ProjectPage from "./components/ProjectPage";
import SkillsPage from "./components/SkillsPage";
import ContactPage from "./components/ContactPage";
import Footer from "./components/Footer";

function App() {
  return (
    <Box
      mx={2}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minWidth: "375px"
      }}
    >
      <Background />
      <Navbar />
      <SplashPage />
      <AboutMe />
      <ProjectPage />
      <SkillsPage />
      <ContactPage />
      {
        <Container>
          <Box>
            {[...new Array(20)]
              .map(
                () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
              )
              .join("\n")}
          </Box>
        </Container>
      }
      <Footer />
    </Box>
  );
}

export default App;
