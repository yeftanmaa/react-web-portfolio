import { makeStyles } from "@mui/styles";

export default makeStyles({
    
    // Jumbotron landing
    container_jumbotronSection: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    },

    header: {
        textAlign: 'center',
        color: 'white',
        fontSize: ['85px', '!important']
    },

    arrowIcon: {
        position: 'absolute',
        bottom: 100,
        color: 'white',
        fontSize: ['70px', '!important']
    },

    // Profile Section Landing
    container_profileSection: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        columnGap: '80px'
    },

    profileImg: {
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    },

    profileSectionsubTitle: {
        color: '#878787'
    },

    profileSectionFooter: {
        color: '#BEBEBE'
    }
    
  });