import React from "react";
// Material UI
import { Box, Typography, Avatar } from "@material-ui/core";

function AboutMe() {
  return (
    <Box style={{ height: "15rem" }}>
      <Typography align="right" style={{ fontSize: "1.3rem" }}>
        {ABOUT_ME}
      </Typography>
      <Avatar
        src="/jeff_neuberger.png"
        variant="rounded"
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          width: "10rem",
          height: "10rem",
          opacity: 0.8
        }}
      />
    </Box>
  );
}

export default AboutMe;

const ABOUT_ME = `I am a teacher turned software engineer who feels that controlling your own 
  learning is the key to education. I want to support learners on a large scale 
  realize their abilities through quality web applications. I am passionate about data, and
  I truly love any project that involves a database!`;
