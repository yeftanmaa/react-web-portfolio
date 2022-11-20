import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './molecules/navbar';
import JumbotronLanding from './molecules/jumbotronlanding';
import ProfileSectionLanding from './molecules/profilesectionanding';
import MyAimSection from './molecules/myaimsection';
import SelectedWorkLanding from './molecules/selectedworklanding';
import reportWebVitals from './reportWebVitals';

// mui import font
import { ThemeProvider, createTheme } from '@mui/material/styles';

// global font family
const theme = createTheme({
  typography: {
    fontFamily: [
      'IBM Plex Mono',
      'Montserrat',
      'Inter',
      'Source Code Pro'
    ].join(','),
  },
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
    <Navbar />
    <JumbotronLanding />
    <ProfileSectionLanding />
    <MyAimSection />
    <SelectedWorkLanding />
  </React.StrictMode>
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
