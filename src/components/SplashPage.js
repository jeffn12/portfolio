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
      <Typography className={Styles.title}>Hi. I'm Jeff.</Typography>
      <Typography className={Styles.subTitle}>
        I use code and design to open the doors of possibility.
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
  },
  title: {
    fontSize: "5rem"
  },
  subTitle: {
    fontSize: "1.5rem",
    textAlign: "center"
  }
});
