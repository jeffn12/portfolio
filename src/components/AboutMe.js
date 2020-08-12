import React from "react";
// Material UI
import { Box, Typography } from "@material-ui/core";

function AboutMe() {
  return (
    <Box>
      <Typography>{ABOUT_ME}</Typography>
    </Box>
  );
}

export default AboutMe;

const ABOUT_ME = `I am a teacher turned software engineer who feels that controlling your own 
  learning is the key to education. I want to support learners on a large scale 
  realize their abilities through quality web applications.`;
