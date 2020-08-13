import React from "react";
// Material UI
import { Box, Typography, Link as MUILink } from "@material-ui/core";

function Footer() {
  return (
    <Box
      width={1}
      style={{
        marginTop: "5rem",
        marginBottom: "2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <Typography
        align="center"
        variant="caption"
        style={{ fontFamily: "Lora" }}
      >
        © 2020 Jeff Neuberger
      </Typography>
      <MUILink href="https://github.com/jeffn12/jeffn12" target="_blank">
        <Typography
          align="center"
          variant="caption"
          style={{ fontFamily: "Lora" }}
        >
          see the code for this website
        </Typography>
      </MUILink>
    </Box>
  );
}

export default Footer;
