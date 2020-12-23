import React from 'react';
import { Provider } from 'react-redux';
import store from 'store';
import Home from 'views/Home/Home';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider, createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import theme from 'theme/theme';

const Root = () => (
  <Provider store={store}>
    <ThemeProvider theme={responsiveFontSizes(createMuiTheme(theme))}>
      <CssBaseline />
      <Home />
    </ThemeProvider>
  </Provider>
);

export default Root;
