import React from "react";
// Material UI
import { Box, Typography, Link as MUILink, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

function Project(props) {
  const {
    title,
    stack,
    description,
    techStack,
    codeURL,
    liveURL
  } = props.project;
  const Styles = useStyles();

  return (
    <Box className={Styles.project}>
      <Typography className={Styles.title}>{title}</Typography>
      <Typography className={Styles.techStack}>({techStack})</Typography>
      <Typography className={Styles.description}>{description}</Typography>
      <Box>
        <MUILink className={Styles.link} href={codeURL} target="_blank">
          <Button className={Styles.button}>See the Code</Button>
        </MUILink>
        <MUILink className={Styles.link} href={liveURL} target="_blank">
          <Button className={Styles.button}>Test it Out</Button>
        </MUILink>
      </Box>
    </Box>
  );
}

export default Project;

const useStyles = makeStyles({
  project: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "2rem 1rem"
  },
  title: {
    fontFamily: "Montserrat",
    fontSize: "1.7rem",
    fontWeight: 900,
    textAlign: "center",
    margin: 0
  },
  description: {
    fontFamily: "Lora",
    fontSize: "1.1rem",
    textAlign: "center",
    fontWeight: 500,
    margin: "2rem 0"
  },
  techStack: {
    fontFamily: "Montserrat",
    fontWeight: 600
  },
  button: {
    width: "8rem",
    margin: ".5rem 1rem",
    backgroundColor: "#aaa"
  }
});
