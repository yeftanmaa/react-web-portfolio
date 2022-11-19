import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import SaveButton from './atoms/saveButton';
import Navbar from './molecules/navbar';
import App from './App';
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
    <App />
    <SaveButton />
  </React.StrictMode>
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
