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
        backgroundSize: 'contain'
    },

    profileSectionsubTitle: {
        color: '#878787'
    },

    profileSectionFooter: {
        color: '#BEBEBE'
    },

    // My Aim Section Landing
    wrapper_myaimsection: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    },

    container_myaimsection: {
        flexDirection: 'column',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    },

    header_myaimsection: {
        textAlign: "left",
        fontSize: ['75px', '!important']
    },

    footer_myaimsection: {
        fontSize: ['24px', '!important']
    },

    // Selected Work Section Landing
    wrapper_selectedworksection: {
       display: 'flex',
       justifyContent: 'flex-start',
       alignItems: 'center'
    },

    container_selectedworksection: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 'auto',
        width: '1800px',
        padding: '15px'
    },

    header_selectedworksection: {
        fontSize: ['90px', '!important']
    },

    item2_selectedworksection: {
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        right: 0,
        gap : '30px'
    },

    footer_selectedworksection: {
        fontSize: ['18px', '!important']
    }
    
  });