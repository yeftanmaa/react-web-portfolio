import React from 'react';
import { Paper, Typography } from '@mui/material';
import Image from '../../assets/images/landing_bg-img-2.png';
import useStyles from './styles';
import { Box } from '@mui/system';

function MyAimSection() {
  const classes = useStyles();

  return (
    <Paper style={{height: 1075, backgroundImage: `url(${Image})` }} className={classes.wrapper_myaimsection}>
        <Box className={classes.container_myaimsection}>
            <Box sx={{ my: 7 }}>
                <Typography variant='h2' className={classes.header_myaimsection} fontFamily='Inter' fontWeight="bold">My aim is to create <br></br> <span style={{color: '#6926F2'}}>{`<lasting impressions />`}</span><br></br>through design & technology</Typography>
            </Box>

            <Box sx={{width: 800, color: '#A0A0A0'}}>
                <Typography fontFamily='Source Code Pro' fontWeight='200' fontStyle='italic' className={classes.footer_myaimsection}>Which I believe that design & technology can adds values faster than it costs.</Typography>
            </Box>
        </Box>
    </Paper>
  );
}

export default MyAimSection;