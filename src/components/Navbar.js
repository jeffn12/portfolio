import React from 'react'
// Material UI
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core'

function Navbar() {
    return (
        <AppBar>
            <Toolbar>
                <IconButton edge="start" aria-label="menu">
                    <h6>icon</h6>
                </IconButton>
                <Typography variant="h6">Jeff Neuberger</Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
