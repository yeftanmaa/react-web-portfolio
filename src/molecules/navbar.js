import React from 'react';
import { AppBar, Box, Toolbar, Button } from '@mui/material';
import logoIcon from '../assets/images/logo.svg';

function Navbar() {
  return (
    <Box sx={{ flexGrow: 1, fontcolor: 'Black'}}>
      <AppBar position="fixed" style={{ background: '#FFF'}} elevation={0}>
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <img src={logoIcon} alt="Logo of my portfolio" width='30px' style={{marginRight: '20px'}}/>
          </Box>
          <Button style={{color: 'black'}} sx={{textTransform: 'lowercase'}}>.me()</Button>
          <Button style={{color: 'black'}} sx={{textTransform: 'lowercase'}}>.about()</Button>
          <Button style={{color: 'black'}} sx={{textTransform: 'lowercase'}}>.work()</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;