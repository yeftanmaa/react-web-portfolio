import React from "react";
import { Paper, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import useStyles from './styles';

const Tools = () => {
    const classes = useStyles();
    return (
        <Paper style={{height: 500,  display: 'flex', alignItems: 'center'}}>
            {/* Creating flex system */}
            <Container maxWidth='xl'>
                <Typography variant="h5" my={4} fontSize={45} className={classes.headTypo}><b>Tools/</b><span style={{fontSize: '30px'}}>years</span></Typography>

                <Box className={classes.flexContainer}>
                    <Box className={classes.FlexSkill}>
                        <Typography className={classes.toolTypo}>HTML/+5</Typography>
                        <Typography className={classes.toolTypo}>CSS/+5</Typography>
                        <Typography className={classes.toolTypo}>TypeScript/~1</Typography>
                        <Typography className={classes.toolTypo}>jQuery/+1</Typography>
                        <Typography className={classes.toolTypo}>JavaScript/+3</Typography>
                    </Box>

                    <Box className={classes.FlexSkill}>
                        <Typography className={classes.toolTypo}>React/+2</Typography>
                        <Typography className={classes.toolTypo}>Next.js/+1</Typography>
                        <Typography className={classes.toolTypo}>Node.js/+3</Typography>
                        <Typography className={classes.toolTypo}>Package Manager/+2</Typography>
                        <Typography className={classes.toolTypo}>.NET Framework/+4</Typography>
                    </Box>

                    <Box className={classes.FlexSkill}>
                        <Typography className={classes.toolTypo}>Adobe Photoshop/+5</Typography>
                        <Typography className={classes.toolTypo}>Adobe Illustrator/+5</Typography>
                        <Typography className={classes.toolTypo}>Premiere Pro/+7</Typography>
                        <Typography className={classes.toolTypo}>Blender/+3</Typography>
                        <Typography className={classes.toolTypo}>Figma/+3</Typography>
                        <Typography className={classes.toolTypo}>Adobe XD/+2</Typography>
                    </Box>
                </Box>
                
            </Container>
        </Paper>
    );
}
 
export default Tools;