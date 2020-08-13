import React from "react";
// Routing
import { Link, withRouter } from "react-router-dom";
// Material UI
import {
  AppBar,
  Toolbar,
  useScrollTrigger,
  CssBaseline
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

function Navbar(props) {
  const Styles = useStyles();
  const { pathname } = props.location;

  return (
    <div className={Styles.root}>
      <CssBaseline />
      <ElevationScroll>
        <AppBar className={Styles.appBar}>
          <Toolbar disableGutters>
            {pathname !== "/" && (
              <Link to="/" className={Styles.linkText}>
                Home
              </Link>
            )}
            {pathname !== "/about" && (
              <Link to="/about" className={Styles.linkText}>
                About Me
              </Link>
            )}
            {pathname !== "/projects" && (
              <Link to="/projects" className={Styles.linkText}>
                Projects
              </Link>
            )}
            {pathname !== "/skills" && (
              <Link to="/skills" className={Styles.linkText}>
                Skills
              </Link>
            )}
            {pathname !== "/contact" && (
              <Link to="/contact" className={Styles.linkText}>
                Contact
              </Link>
            )}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </div>
  );
}

export default withRouter(Navbar);

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    position: "sticky",
    marginBottom: "4rem",
    zIndex: 1
  },
  appBar: {
    backgroundColor: "transparent",
    alignItems: "flex-end",
    padding: "0 0.5rem"
  },
  linkText: {
    fontFamily: "Lora",
    fontWeight: 500,
    fontSize: "1.2rem",
    color: "#ccc",
    margin: "0 .5rem",
    textDecoration: "none"
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
