import React from "react";
// Material UI
import { Box, Typography } from "@material-ui/core";

function Footer() {
  return (
    <Box width={1} style={{ marginTop: "5rem", textAlign: "center" }}>
      <Typography align="center" variant="caption">
        © 2020 Jeff Neuberger
      </Typography>
    </Box>
  );
}

export default Footer;
