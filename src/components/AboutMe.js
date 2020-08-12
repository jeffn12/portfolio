import React, { useState, useEffect } from "react";
// Material UI
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

function AboutMe() {
  const [windowHeight, setWindowHeight] = useState(
    document.documentElement.clientHeight
  );

  useEffect(() => {
    const onResize = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener("resize", onResize);

    return function cleanup() {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const Styles = useStyles();

  return (
    <Box className={Styles.root} style={{ height: windowHeight * 0.8 }}>
      <Typography>Hi. I'm Jeff</Typography>
      <Typography>
        I use code and design to open the doors of possibility. Join me!
      </Typography>
    </Box>
  );
}

export default AboutMe;

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: document.documentElement.clientHeight * 0.2
  }
});
