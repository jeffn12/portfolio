import React, { useState } from "react";
// Routing
import { NavLink, withRouter } from "react-router-dom";
// Material UI
import {
  AppBar,
  Toolbar,
  useScrollTrigger,
  CssBaseline,
  useMediaQuery,
  IconButton,
  Drawer,
  ListItem,
  Typography
} from "@material-ui/core";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import { makeStyles } from "@material-ui/styles";

function Navbar(props) {
  const Styles = useStyles();
  // Determine whether user is accessing site on a small screen
  const isSmallScreen = useMediaQuery("(max-width:470px)");

  return (
    <div className={Styles.root}>
      <CssBaseline />
      <ElevationScroll isSmallScreen={isSmallScreen}>
        <AppBar className={Styles.appBar}>
          <Toolbar disableGutters>
            {isSmallScreen ? (
              <SmallScreenNav Styles={Styles} {...props} />
            ) : (
              <FullScreenNav Styles={Styles} />
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
    display: "inline",
    fontFamily: "Lora",
    color: "#eee",
    fontWeight: 800,
    fontSize: "1.2rem",
    margin: "0 .75rem",
    textDecoration: "none",
    fontStyle: "italic"
  }
});

const ElevationScroll = (props) => {
  const { children, isSmallScreen } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });

  return React.cloneElement(children, {
    elevation: !isSmallScreen && trigger ? 4 : 0,
    style: {
      backgroundColor:
        !isSmallScreen && trigger ? "rgb(150,150,150)" : "transparent",
      opacity: 0.8
    }
  });
};

const FullScreenNav = (props) => {
  const { Styles } = props;
  return (
    <>
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
    </>
  );
};

const SmallScreenNav = (props) => {
  const { Styles, history, location } = props;
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        edge="end"
        style={{ marginRight: "-.50rem" }}
        onClick={handleClick}
      >
        <MenuRoundedIcon fontSize="large" />
      </IconButton>
      <Drawer
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchor="right"
        PaperProps={{
          style: { backgroundColor: "rgb(150,150,150)", height: "auto" }
        }}
      >
        <ListItem
          onClick={() => {
            setAnchorEl(null);
            setTimeout(() => history.push("/"), 40); // make sure that drawer is fully closed before navigating
          }}
          style={{ backgroundColor: "rgb(150,150,150)", cursor: "pointer" }}
        >
          <Typography
            className={
              location.pathname === "/" ? Styles.activeLink : Styles.linkText
            }
          >
            Home
          </Typography>
        </ListItem>
        <ListItem
          onClick={() => {
            setAnchorEl(null);
            setTimeout(() => history.push("/about"), 40); // make sure that drawer is fully closed before navigating
          }}
          style={{ backgroundColor: "rgb(150,150,150)", cursor: "pointer" }}
        >
          <Typography
            className={
              location.pathname === "/about"
                ? Styles.activeLink
                : Styles.linkText
            }
          >
            About Me
          </Typography>
        </ListItem>
        <ListItem
          onClick={() => {
            setAnchorEl(null);
            setTimeout(() => history.push("/projects"), 40); // make sure that drawer is fully closed before navigating
          }}
          style={{ backgroundColor: "rgb(150,150,150)", cursor: "pointer" }}
        >
          <Typography
            className={
              location.pathname === "/projects"
                ? Styles.activeLink
                : Styles.linkText
            }
          >
            Projects
          </Typography>
        </ListItem>
        <ListItem
          onClick={() => {
            setAnchorEl(null);
            setTimeout(() => history.push("/contact"), 40); // make sure that drawer is fully closed before navigating
          }}
          style={{ backgroundColor: "rgb(150,150,150)", cursor: "pointer" }}
        >
          <Typography
            className={
              location.pathname === "/contact"
                ? Styles.activeLink
                : Styles.linkText
            }
          >
            Contact Me
          </Typography>
        </ListItem>
      </Drawer>
    </>
  );
};
