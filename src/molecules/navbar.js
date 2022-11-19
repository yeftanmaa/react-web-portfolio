import React from 'react';
import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material';

function Navbar() {
  return (
    <Box sx={{ flexGrow: 1, fontcolor: 'Black'}}>
      <AppBar position="fixed" style={{ background: '#FFF' }}>
        <Toolbar>
          <Typography variant="h6" component="div" style={{color: 'black'}} sx={{ flexGrow: 1 }} fontFamily='Montserrat Black'>
            JOHANES YEFTA.
          </Typography>
          <Button style={{color: 'black'}} sx={{textTransform: 'lowercase'}}>.me()</Button>
          <Button style={{color: 'black'}} sx={{textTransform: 'lowercase'}}>.about()</Button>
          <Button style={{color: 'black'}} sx={{textTransform: 'lowercase'}}>.work()</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;