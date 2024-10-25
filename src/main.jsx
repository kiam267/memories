import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import reducers from './reducer';
import { ThemeProvider, createTheme } from '@mui/material';
import { GoogleOAuthProvider } from '@react-oauth/google';
const store = configureStore({
  reducer: reducers,
  devTools: true,
});

// styles CSS
import './index.css';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="733197338050-8mjf6itbc751aceoq3819h95dd9stkqt.apps.googleusercontent.com"  onScriptLoadError={(e) => console.log(e)}>
      <Provider store={store}>
      <ThemeProvider theme={theme}>
      <App />
      </ThemeProvider>
      </Provider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
