import React from "react";
// Material UI
import { Box, Typography } from "@material-ui/core";

function SectionHeader(props) {
  return (
    <Box style={{ alignSelf: "flex-start", marginBottom: "10rem" }}>
      <Typography
        variant="h2"
        style={{
          fontStyle: "italic"
        }}
      >
        {props.title}
      </Typography>
      <hr />
    </Box>
  );
}

export default SectionHeader;
