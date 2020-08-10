import React from 'react'
// Material UI
import { AppBar, Toolbar, IconButton, Typography, Avatar, useScrollTrigger, CssBaseline } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import MenuIcon from '@material-ui/icons/Menu'


function Navbar() {
    const Styles = useStyles();

    return (
        <div className={Styles.root}>
            <CssBaseline />
        <ElevationScroll>
        <AppBar>
            <Toolbar>
                <IconButton edge="start" color="inherit" className={Styles.menuButton} aria-label="menu" >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={Styles.title}>Jeff Neuberger</Typography>
                <Avatar alt="headshot photo of Jeff Neuberger" src="/jeff_neuberger.jpeg" className={Styles.avatar}/>
            </Toolbar>
        </AppBar>
        </ElevationScroll>
        </div>
    )
}

export default Navbar

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        position: "sticky" 
    },
    menuButton: {
        marginRight: "2rem"
    },
    title: {
        flexGrow: 1
    },
    avatar: {
        width: "3rem",
        height: "3rem"
    }
})

const ElevationScroll = (props) => {
    const { children } = props;
    
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }