import React from "react";
// Components
import SectionHeader from "./SectionHeader";
// Material UI
import { Box, Typography } from "@material-ui/core";

function AboutMe() {
  return (
    <>
      <SectionHeader title="About Me" />
      <Box
        style={{
          width: "100%",
          alignSelf: "flex-end",
          marginBottom: "15rem",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end"
        }}
      >
        <Typography
          align="right"
          style={{ fontSize: "2.5rem", marginBottom: "1rem" }}
        >
          My name is Jeff Neuberger
        </Typography>
        <Typography align="right" style={{ fontSize: "1.3rem", width: "80%" }}>
          {ABOUT_ME}
        </Typography>{" "}
      </Box>
    </>
  );
}

export default AboutMe;

const ABOUT_ME = `I am a teacher turned software engineer, and I feel that controlling your own 
  path is the key to truly opening the doors to learning. I want to support learners on a large scale 
  realize their abilities through quality web applications. I am passionate about data, and
  I truly love any project that involves a database!`;
