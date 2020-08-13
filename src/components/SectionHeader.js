import React from "react";
// Material UI
import { Box, Typography, Divider } from "@material-ui/core";

function SectionHeader(props) {
  return (
    <Box
      style={{
        alignSelf: "flex-start",
        marginBottom: "2rem"
      }}
    >
      <Typography
        variant="h2"
        style={{
          fontFamily: "Montserrat",
          fontSize: "2.75rem",
          fontWeight: "bolder"
        }}
      >
        {props.title}
      </Typography>
      <Divider light={false} />
    </Box>
  );
}

export default SectionHeader;
