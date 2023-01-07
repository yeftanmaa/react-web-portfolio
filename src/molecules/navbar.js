import React from 'react';
import { AppBar, Box, Toolbar, Button } from '@mui/material';
import logoIcon from '../assets/images/logo2.svg';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

  // navigate button onclick
  const navigate = useNavigate();

  const navigateToAbout = () => {
    navigate('/about');
  };

  const navigateToMe = () => {
    navigate('/');
  }

  return (
    <Box sx={{ flexGrow: 1, fontcolor: 'Black'}}>
      <AppBar position="fixed" style={{ background: '#FFF'}} elevation={0}>
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <a href={navigateToMe}><img src={logoIcon} alt="Logo of my portfolio" width='45px' style={{ marginTop: '7px', marginRight: '20px'}} onClick={navigateToMe}/></a>
          </Box>
          
          <Button sx={{ color: 'black', textTransform: 'lowercase' }} onClick={navigateToMe}>{'.me()'}</Button>
          <Button sx={{ color: 'black', textTransform: 'lowercase' }} onClick={navigateToAbout}>{'.about()'}</Button>
          <Button sx={{ color: 'black', textTransform: 'lowercase' }} >{'.work()'}</Button>

          {/* <Button sx={{ color: 'black', textTransform: 'lowercase', ":focus": {color: "#BEBEBE"} }}>{'.me()'}</Button>
          <Button sx={{ color: 'black', textTransform: 'lowercase', ":focus": {color: "#BEBEBE"} }}>{'.about()'}</Button>
          <Button sx={{ color: 'black', textTransform: 'lowercase', ":focus": {color: "#BEBEBE"} }}>{'.work()'}</Button> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;