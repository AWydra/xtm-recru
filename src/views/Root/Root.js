import React from 'react';
import Home from 'views/Home/Home';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider, createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import theme from 'theme/theme';

const Root = () => (
  <ThemeProvider theme={responsiveFontSizes(createMuiTheme(theme))}>
    <CssBaseline />
    <Home />
  </ThemeProvider>
);

export default Root;
