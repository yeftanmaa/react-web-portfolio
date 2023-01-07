import { makeStyles } from "@mui/styles";
import { border, fontSize } from "@mui/system";

export default makeStyles({
    
    // Jumbotron about
    container_aboutSection: {
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'    
    },

    aboutJumbotronTitle: {
        height: '100%',
        display: ['flex', '!important'],
        flexDirection: ['column', '!important'],
        justifyContent: ['center', '!important'],
        alignItems: ['flex-start', '!important'],
    },

    aboutDescription: {
        lineHeight: ['40px', '!important'],
        fontSize: ['30px', '!important']
    },

    downloadResume: {
        display: 'flex',
        alignItems: 'center',
        gap: '7px'
    },

    platformGroup: {
        display: 'flex',
        gap: '10px',
        marginRight: '5px',
        alignItems: 'center'
    },

    // Main Skill
    headTypo: {
        letterSpacing: '-1px'
    },

    flexContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        gap: '50px'
    },
    
    FlexSkill: {
        width: '300px', 
    },

    skillTypo: {
        fontSize: '18px !important',
        padding: '10px 0',
        color: '#878787'
    },
    
    // Tool Skill
    toolTypo: {
        fontSize: '18px !important',
        padding: '8px 0',
        color: '#878787'
    }
  });