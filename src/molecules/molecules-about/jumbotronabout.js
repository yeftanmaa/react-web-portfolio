import React from "react";
import useStyles from './styles';
import { Button, Paper, Typography } from "@mui/material";
import Image from '../../assets/images/about-jumbotoron.png';
import { Container, Box } from "@mui/system";

const JumbotronAbout = () => {
    const classes = useStyles();
    return (
        <Paper style={{height: 937, backgroundImage: `url(${Image})` }} className={classes.container_aboutSection}>
            <Container maxWidth='xl' className={classes.aboutJumbotronTitle}>
                <Typography variant='h1' fontFamily='Inter' fontWeight="700">{'<About />'}</Typography>

                <Box className={classes.downloadResume}>
                    <Typography>Download my</Typography>
                    <Button>Resume</Button>
                </Box>

                <Box style={{ width: 900 }} sx={{ my: 4 }}>
                    <Typography variant="body" fontFamily='Inter' fontWeight="medium" className={classes.aboutDescription}>I am a junior Frontend developer, graphic designer and 3D designer from Jakarta, Indonesia.</Typography>
                </Box>
            </Container>
        </Paper>
    );
}

export default JumbotronAbout;