import React from "react";
// Components
import { Box, Container } from "@material-ui/core";
import Background from "./components/Background";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Background />
      <Navbar />
      <Container>
        <Box>
          {[...new Array(12)]
            .map(
              () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
            )
            .join("\n")}
        </Box>
      </Container>
    </>
  );
}

export default App;
