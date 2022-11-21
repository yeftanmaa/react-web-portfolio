import { Paper, SvgIcon, Typography } from '@mui/material';
import React from 'react';
import Image from '../../assets/images/landing_jumbotron-bg-img.png';
import useStyles from './styles';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function JumbotronLanding() {

  const classes = useStyles();
  return (
    <Paper style={{height: 937, backgroundImage: `url(${Image})` }} className={classes.container_jumbotronSection}>
        <Typography variant='h1' className={classes.header} fontFamily='Inter' fontWeight="700">Create <span style={{color: '#584949'}}>{`<lasting impressions />`}</span><br></br>through design & technology</Typography>
        <SvgIcon component={KeyboardArrowDownIcon} fontSize="large" className={classes.arrowIcon} />
    </Paper>
  );
}

export default JumbotronLanding;