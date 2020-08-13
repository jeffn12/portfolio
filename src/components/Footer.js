import React from "react";
// Material UI
import { Box, Typography } from "@material-ui/core";

function Footer() {
  return (
    <Box
      width={1}
      style={{ marginTop: "5rem", marginBottom: "2rem", textAlign: "center" }}
    >
      <Typography
        align="center"
        variant="caption"
        style={{ fontFamily: "Lora" }}
      >
        © 2020 Jeff Neuberger
      </Typography>
    </Box>
  );
}

export default Footer;
