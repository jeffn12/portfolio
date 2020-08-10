import React from 'react'
// Material UI
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

function Navbar() {
    return (
        <AppBar>
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu" >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6">Jeff Neuberger</Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
