import React from 'react';
import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  bar: {
    marginBottom: theme.spacing(4),
    backgroundColor: 'white',
    color: 'black',
  },
}));

const NavBar = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.bar}>
      <Toolbar>
        <Typography component="h1" variant="h6">
          Wikipedia API
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
