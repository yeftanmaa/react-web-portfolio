import { Box, Paper, Typography } from '@mui/material';
import React from 'react';
import useStyles from './styles';
import Image from '../assets/images/profile-img.png';

function ProfileSectionLanding() {

  const classes = useStyles();
  return (
    <Paper style={{height: 850, backgroundColor: 'white' }} className={classes.container_profileSection}>
        <Box style={{ width: 450, height: 450, backgroundImage: `url(${Image})`}} className={classes.profileImg}></Box>
        <Box>
            <Typography variant='body' fontFamily='Source Code Pro' className={classes.profileSectionsubTitle}><i>{`// my_profile.bmp`}</i></Typography>

            <Box style={{ width: 800}} sx={{ my: 4 }}>
                <Typography variant='h3' fontFamily='Inter' fontWeight="medium">Hi! I’m Johanes Yefta, currently pursuing a <span style={{color: '#6926F2'}}><i>bachelor degree</i></span> of Computer Science.</Typography>
            </Box>

            <Typography fontFamily='Source Code Pro' fontWeight='light' className={classes.profileSectionFooter}><i>{`>> I like doing something that most people hates.`}</i></Typography>
            
        </Box>
    </Paper>
  );
}

export default ProfileSectionLanding;