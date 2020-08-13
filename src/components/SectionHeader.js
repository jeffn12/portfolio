import React from "react";
// Material UI
import { Box, Typography, Divider } from "@material-ui/core";

function SectionHeader(props) {
  return (
    <Box
      style={{
        alignSelf: "flex-start",
        marginBottom: "6rem"
      }}
    >
      <Typography
        variant="h2"
        style={{
          fontStyle: "italic",
          fontWeight: "lighter"
        }}
      >
        {props.title}
      </Typography>
      <Divider light={false} />
    </Box>
  );
}

export default SectionHeader;
