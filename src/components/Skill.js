import React from "react";
import { Box, Tooltip, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

function Skill(props) {
  const { skill, icon, iconHasText } = props.skill;
  const Styles = useStyles();
  return (
    <Box
      mx={2}
      my={2}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: iconHasText && ".75rem" // if the icon already has text, make sure it stays centered vertically
      }}
    >
      <Tooltip title={skill} placement="top-start" arrow>
        <img
          style={{ width: "5rem", height: "5rem" }}
          src={icon}
          alt={`logo for ${skill}`}
        />
      </Tooltip>
      <Typography className={Styles.iconText}>
        {!iconHasText && skill}
      </Typography>
    </Box>
  );
}

export default Skill;

const useStyles = makeStyles({
  iconText: {
    fontSize: ".75rem",
    fontStyle: "italic"
  }
});
