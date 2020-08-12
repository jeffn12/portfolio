import React from "react";
import { Box, Tooltip } from "@material-ui/core";

function Skill(props) {
  return (
    <Box mx={2} my={2}>
      <Tooltip title={props.skill}>
        <img
          style={{ width: "5rem", height: "5rem" }}
          src={`/icons/${props.icon}`}
          alt={`logo for ${props.skill}`}
        />
      </Tooltip>
    </Box>
  );
}

export default Skill;
