import { Box, Typography } from '@mui/material';
import React from 'react';

const ReactEffectComponent = () => {
  return (
    <Box sx={{my: 3}} style={{marginTop: '-50px'}}>
      <Typography sx={{ color: "#878787", opacity: 0.2 }} fontFamily='Source Code Pro' fontStyle='italic'>{'1. import React from ‘react’;'}</Typography>
      <Typography sx={{ color: "#878787", opacity: 0.6 }} fontFamily='Source Code Pro' fontStyle='italic'>{'2. import ‘./style.js’;'}</Typography>
      <Typography sx={{ color: "#878787", opacity: 0.7 }} fontFamily='Source Code Pro' fontStyle='italic'>{'3. import { About } from ../components/AboutPage;'}</Typography>
    </Box>
  );
}

export default ReactEffectComponent;