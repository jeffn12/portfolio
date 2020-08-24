import React from "react";
import { withRouter } from "react-router-dom";
// Material UI
import { Fab } from "@material-ui/core";
import MailOutlineRoundedIcon from "@material-ui/icons/MailOutlineRounded";
import { makeStyles } from "@material-ui/styles";

function ContactMeFab(props) {
  const Styles = useStyles();
  return (
    <Fab
      onClick={() =>
        props.location.pathname !== "/contact" && props.history.push("/contact")
      }
      className={Styles.fab}
      color="primary"
    >
      <MailOutlineRoundedIcon />
    </Fab>
  );
}

export default withRouter(ContactMeFab);

const useStyles = makeStyles({
  fab: {
    zIndex: 10,
    position: "fixed",
    bottom: 20,
    right: 20,
    backgroundColor: "#222"
  }
});
