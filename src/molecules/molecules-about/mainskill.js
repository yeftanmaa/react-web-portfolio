import React from "react";
import { Paper, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import useStyles from './styles';

const MainSkill = () => {
    const classes = useStyles();
    return (
        <Paper style={{height: 500,  display: 'flex', alignItems: 'center'}}>
            {/* Creating flex system */}
            <Container maxWidth='xl'>
                <Typography variant="h5" my={4} fontSize={45} className={classes.headTypo}><b>Main Skills</b></Typography>

                <Box className={classes.flexContainer}>
                    <Box className={classes.FlexSkill}>
                        <Typography className={classes.skillTypo}>Frontend development,</Typography>
                        <Typography className={classes.skillTypo}>UI/UX Design,</Typography>
                        <Typography className={classes.skillTypo}>JavaScript, HTML, CSS, jQuery</Typography>
                    </Box>

                    <Box className={classes.FlexSkill}>
                        <Typography className={classes.skillTypo}>Java, Visual Basic, C#, C++, Python</Typography>
                        <Typography className={classes.skillTypo}>Graphic design, Brand design, 3D design</Typography>
                    </Box>

                    <Box className={classes.FlexSkill}>
                        <Typography className={classes.skillTypo}>Photoshop, Illustrator, Adobe XD, Figma, Premiere Pro, Lightroom, Blender</Typography>
                    </Box>
                </Box>
                
            </Container>
        </Paper>
    );
}
 
export default MainSkill;