import React from "react";
import useStyles from './styles';
import { Button, Paper, Typography } from "@mui/material";
import Image from '../../assets/images/about-jumbotoron.png';
import { Container, Box } from "@mui/system";
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import ReactEffectComponent from "../../atoms/reacteffectcomponent";
import linkedinLogo from '../../assets/icons/linkedin-logo.png';
import githubLogo from '../../assets/icons/github-logo.png';

const JumbotronAbout = () => {
    const classes = useStyles();
    return (
        <Paper style={{height: 935, backgroundImage: `url(${Image})` }} className={classes.container_aboutSection}>
            <Container maxWidth='xl' className={classes.aboutJumbotronTitle}>
                <ReactEffectComponent />
                <Typography variant='h1' fontFamily='Inter' fontWeight="700" sx={{marginTop: '50px', marginBottom: '50px'}}>{'<About />'}</Typography>

                <Box className={classes.downloadResume} sx={{ my: 2 }}>
                    <Box className={classes.platformGroup}>
                        <a href='https://www.linkedin.com/in/yeftanma/' target={'_blank'}><img src={linkedinLogo} alt="Linkedin logo directed to my linkedin profile" width='30px'/></a>
                        <a href='https://github.com/yeftanmaa' target={'_blank'}><img src={githubLogo} alt="Github logo directed to my github profile" width='33px'/></a>
                    </Box>
                    <Typography>Download my</Typography>
                    <Button sx={{ color: 'white', textTransform: 'lowercase', backgroundColor: '#6926F2', borderRadius: 20, paddingLeft: 2, paddingRight: 2, height: '27px' }} endIcon={<FileDownloadOutlinedIcon />}>Resume</Button>
                </Box>

                <Box style={{ width: 900 }}>
                    <Typography variant="body" fontFamily='Inter' fontWeight="medium" className={classes.aboutDescription}>I am a junior frontend developer, graphic designer and 3D designer from Jakarta, Indonesia.</Typography>
                </Box>
            </Container>
        </Paper>
    );
}

export default JumbotronAbout;