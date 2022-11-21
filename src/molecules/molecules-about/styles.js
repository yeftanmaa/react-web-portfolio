import { makeStyles } from "@mui/styles";

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
        alignItems: 'baseline'
    }
  });