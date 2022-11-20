import React from 'react';
import { Paper, Typography } from '@mui/material';
import useStyles from './styles';
import { Box } from '@mui/system';
import githubLogo from '../assets/icons/github-logo.png';
import linkedinLogo from '../assets/icons/linkedin-logo.png';

function SelectedWorkLanding() {
  const classes = useStyles();

  return (
    <Paper style={{height: 900, backgroundColor: 'white' }} className={classes.wrapper_selectedworksection}>
        <Box className={classes.container_selectedworksection}>
            <Box className={classes.item1_selectedworksection}>
                <Box sx={{width: 800, color: '#A0A0A0'}}>
                    <Typography fontFamily='Source Code Pro' fontWeight='200' fontStyle='italic' className={classes.footer_selectedworksection}>{`// Pssttt... This is not the end of the show...`}</Typography>
                </Box>

                <Box sx={{ my: 4 }}>
                    <Typography variant='h2' className={classes.header_selectedworksection} fontFamily='Inter' fontWeight="bold">Check out my <br></br> <span style={{color: '#6926F2'}}>selected works </span>for <br></br> more details.</Typography>
                </Box>
            </Box>

            <Box className={classes.item2_selectedworksection}>
                <a href='https://www.linkedin.com/in/yeftanma/' target={'_blank'}><img src={linkedinLogo} alt="Linkedin logo directed to my linkedin profile" width='50px' style={{ marginTop: '7px', marginRight: '20px'}}/></a>
                <a href='https://github.com/yeftanmaa' target={'_blank'}><img src={githubLogo} alt="Github logo directed to my github profile" width='50px' style={{ marginTop: '7px', marginRight: '20px'}}/></a>
            </Box>
        </Box>
    </Paper>
  );
}

export default SelectedWorkLanding;