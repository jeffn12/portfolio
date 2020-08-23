import React from "react";
// Routing
import { NavLink, withRouter } from "react-router-dom";
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
            <NavLink
              exact
              to="/"
              className={Styles.linkText}
              activeClassName={Styles.activeLink}
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={Styles.linkText}
              activeClassName={Styles.activeLink}
            >
              About Me
            </NavLink>

            <NavLink
              to="/projects"
              className={Styles.linkText}
              activeClassName={Styles.activeLink}
            >
              Projects
            </NavLink>

            <NavLink
              to="/skills"
              className={Styles.linkText}
              activeClassName={Styles.activeLink}
            >
              Skills
            </NavLink>

            <NavLink
              to="/contact"
              className={Styles.linkText}
              activeClassName={Styles.activeLink}
            >
              Contact
            </NavLink>
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
    display: "inline",
    fontFamily: "Lora",
    fontWeight: 500,
    fontSize: "1.2rem",
    color: "#ddd",
    margin: "0 .75rem",
    textDecoration: "none"
  },
  activeLink: {
    color: "#eee",
    fontWeight: 800
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
