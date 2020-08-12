import React from "react";
// Material UI
import { Box, Typography, Link as MUILink, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

function Project(props) {
  const { title, description, codeURL, liveURL, icon } = props.project;
  const Styles = useStyles();

  return (
    <Box className={Styles.project}>
      <Typography className={Styles.title}>{title}</Typography>
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
    margin: "2rem 1rem",
    width: "17rem"
  },
  title: {
    fontSize: "1.5rem",
    textAlign: "center"
  },
  description: {
    fontSize: "1rem",
    textAlign: "center",
    fontStyle: "italic"
  },
  button: {
    width: "8rem",
    margin: "0rem 0.25rem",
    backgroundColor: "#aaa"
  }
});
