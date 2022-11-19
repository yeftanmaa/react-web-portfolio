import { Paper, Typography } from '@mui/material';
import React from 'react';
import Image from '../assets/images/landing_jumbotron-bg-img.png';
import useStyles from './styles';

function JumbotronLanding() {

  const classes = useStyles();
  return (
    <Paper style={{height: 937, backgroundImage: `url(${Image})` }} className={classes.container}>
        <Typography variant='h1' className={classes.header} fontFamily='Inter' fontWeight="700">Create <span style={{color: '#584949'}}>{`<lasting impressions />`}</span><br></br>through design & technology</Typography>
    </Paper>
  );
}

export default JumbotronLanding;