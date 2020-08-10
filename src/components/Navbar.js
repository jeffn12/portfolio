import React from 'react'
// Material UI
import { AppBar, Toolbar, IconButton, Typography, Avatar } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import MenuIcon from '@material-ui/icons/Menu'


function Navbar() {
    const Styles = useStyles();

    return (
        <div className={Styles.root}>
        <AppBar>
            <Toolbar>
                <IconButton edge="start" color="inherit" className={Styles.menuButton} aria-label="menu" >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={Styles.title}>Jeff Neuberger</Typography>
                <Avatar alt="headshot photo of Jeff Neuberger" src="/jeff_neuberger.jpeg" className={Styles.avatar}/>
            </Toolbar>
        </AppBar>
        </div>
    )
}

export default Navbar

const useStyles = makeStyles({
    root: {
        flexGrow: 1 
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
