import React from "react";
// Material UI
import { Box, Typography, Link as MUILink } from "@material-ui/core";

function Project(props) {
  const { title, description, codeURL, liveURL } = props.project;
  return (
    <Box>
      <Typography>{title}</Typography>
      <Typography>{description}</Typography>
      <MUILink href={codeURL} target="_blank">
        See the Code
      </MUILink>
      <MUILink href={liveURL} target="_blank">
        Test it Out
      </MUILink>
    </Box>
  );
}

export default Project;
