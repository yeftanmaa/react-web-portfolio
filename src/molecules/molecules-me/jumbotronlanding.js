import { Paper, SvgIcon, Typography, styled } from '@mui/material';
import './styles.css';
import React from 'react';
import Image from '../../assets/images/landing_jumbotron-bg-img.png';
import useStyles from './styles';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function JumbotronLanding() {

  const classes = useStyles();

  const KeyframesDissolveIn = styled("Typography")({
    "@keyframes dissolveIn": {
      from: {
        top: '-150px',
        opacity: 0
      },
      to: {
        top: 0,
        opacity: 1
      }
    },
    animation: "dissolveIn 1s ease-out",
    position: "relative"
  })

  return (
    <Paper style={{height: 937, backgroundImage: `url(${Image})` }} className={classes.container_jumbotronSection}>
        <KeyframesDissolveIn><Typography variant='h1' className={classes.header} fontFamily='Inter' fontWeight="700">Create <span style={{color: '#584949'}}>{`<lasting impressions />`}</span><br></br>through design & technology</Typography></KeyframesDissolveIn>
        <SvgIcon component={KeyboardArrowDownIcon} fontSize="large" className={classes.arrowIcon} />
    </Paper>
  );
}

export default JumbotronLanding;