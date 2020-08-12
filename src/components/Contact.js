import React from "react";
// Material UI
import { Box, Link as MUILink, Tooltip, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

function Contact(props) {
  const { contactType, link, icon, message } = props.contact;
  const Styles = useStyles();

  return (
    <Tooltip title={message} placement="top-start">
      <MUILink href={link} target="_blank">
        <Box className={Styles.container}>
          <img
            style={{ width: "2rem", height: "2rem", opacity: 0.5 }}
            src={`/icons/${icon}`}
            alt={`logo for ${contactType}`}
          />
          <Typography className={Styles.label}>{contactType}</Typography>
        </Box>
      </MUILink>
    </Tooltip>
  );
}

export default Contact;

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "4rem",
    margin: "0rem 1rem"
  },
  label: {
    fontSize: ".75rem",
    color: "black"
  }
});
