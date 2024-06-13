import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import './Navbar.css';



const Navbar = () => {
    return (
        <>
            <AppBar position="static" sx={{ backgroundColor: '#1b2838' }}>
                <Toolbar>
                    <Typography variant="h6" sx={{ flexGrow: 1, color: '#FFF' }}>
                        PLAYVERSE
                    </Typography>
                    <Button color="inherit">STORE</Button>
                    <Button color="inherit">COMMUNITY</Button>
                    <Button color="inherit">ABOUT</Button>
                    <Button color="inherit">SUPPORT</Button>
                    <Button variant="outlined" color="inherit" sx={{ ml: 2 }}>Login</Button>
                </Toolbar>
            </AppBar>
                    </>
    );
};

export default Navbar;
