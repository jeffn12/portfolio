import React from "react";
// Material UI
import { Box, Typography } from "@material-ui/core";

function AboutMe() {
  return (
    <>
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
          style={{
            fontFamily: "Montserrat",
            fontSize: "2.5rem",
            marginBottom: "1rem",
            fontWeight: "bold"
          }}
        >
          My name is Jeff Neuberger
        </Typography>
        <Typography
          align="right"
          style={{
            fontFamily: "Lora",
            fontSize: "1.4rem",
            width: "80%"
          }}
        >
          I am a driven educator and lifelong learner leveraging my experience
          in STEM and technology instruction to design and develop meaningful
          software solutions. I feel that controlling your own path is the key
          to truly opening the doors to long-lasting learning.
        </Typography>
        <br></br>
        <Typography
          align="right"
          style={{
            fontFamily: "Lora",
            fontSize: "1.4rem",
            width: "80%"
          }}
        >
          My goal is to create software and web applications that support
          learners on a large scale realize their own potential. I am passionate
          about user feedback, data-driven decision making, and organizing
          solutions in an intuitive and meaningful way.
        </Typography>
      </Box>
    </>
  );
}

export default AboutMe;
