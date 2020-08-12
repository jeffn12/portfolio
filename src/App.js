import React from "react";
// Components
import { Box, Container } from "@material-ui/core";
import Background from "./components/Background";
import Navbar from "./components/Navbar";
import AboutMe from "./components/SplashPage";
import SkillsPage from "./components/SkillsPage";
import ProjectPage from "./components/ProjectPage";

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
      <AboutMe />
      <ProjectPage />
      <SkillsPage />
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
    </Box>
  );
}

export default App;
