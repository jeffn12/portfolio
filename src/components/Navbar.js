import React from "react";
// Material UI
import {
  AppBar,
  Toolbar,
  useScrollTrigger,
  CssBaseline
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

function Navbar() {
  const Styles = useStyles();

  return (
    <div className={Styles.root}>
      <CssBaseline />
      <ElevationScroll>
        <AppBar className={Styles.appBar}>
          <Toolbar noGutters>
            <div className={Styles.linkText}>About Me</div>
            <div className={Styles.linkText}>Projects</div>
            <div className={Styles.linkText}>Skills</div>
            <div className={Styles.linkText}>Contact</div>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </div>
  );
}

export default Navbar;

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    position: "sticky",
    marginBottom: "4rem",
    zIndex: 1
  },
  appBar: {
    backgroundColor: "transparent",
    alignItems: "flex-end"
  },
  linkText: {
    fontFamily: "Lora",
    fontSize: "1.2rem",
    fontColor: "#aaa",
    marginLeft: "1rem"
  }
});

const ElevationScroll = (props) => {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
    style: {
      backgroundColor: trigger ? "rgb(150,150,150)" : "transparent",
      opacity: 0.8
    }
  });
};
