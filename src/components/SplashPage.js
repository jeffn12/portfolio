import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
// Material UI
import { Box, Typography, Fab } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import MailOutlineRoundedIcon from "@material-ui/icons/MailOutlineRounded";
// Media Queries
import { MediaQuery } from "../media";

function SplashPage(props) {
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
      <Typography
        className={Styles.title}
        style={{ fontSize: !MediaQuery() ? "3.9rem" : "4.5rem" }}
      >
        Hi. I'm Jeff.
      </Typography>
      <Typography className={Styles.subTitle}>
        I use code and design to open the doors of possibility.
      </Typography>
      <Fab
        onClick={() => props.history.push("/contact")}
        className={Styles.fab}
        color="primary"
      >
        <MailOutlineRoundedIcon />
      </Fab>
    </Box>
  );
}

export default withRouter(SplashPage);

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: document.documentElement.clientHeight * 0.2
  },
  title: {
    fontFamily: "Montserrat",
    fontSize: "4.5rem",
    textAlign: "center"
  },
  subTitle: {
    fontFamily: "Lora",
    fontSize: "1.5rem",
    textAlign: "center"
  },
  fab: {
    position: "fixed",
    bottom: 20,
    right: 20,
    backgroundColor: "#222"
  }
});
