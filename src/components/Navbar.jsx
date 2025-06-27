import React from 'react'
import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';

const Navbar = () => {
    return (
        <AppBar position="static" color="transparent" elevation={0}>
            <Toolbar sx={{ justifyContent: 'space-between', px: 4 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    Grant
                </Typography>
                <Box>
                    <Button color="inherit" sx={{ mx: 1 }} href="#projects">Projects</Button>
                    <Button color="inherit" sx={{ mx: 1 }} href="#about">About Me</Button>
                    <Button color="inherit" sx={{ mx: 1 }} href="#contact">Contact</Button>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar