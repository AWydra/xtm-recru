import React from 'react';
import { Button, Paper, TextField, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  form: {
    marginTop: theme.spacing(3),
    display: 'flex',
    justifyContent: 'center',
    '& > *': {
      margin: theme.spacing(0, 1),
    },
  },
}));

const ReplaceForm = () => {
  const classes = useStyles();

  return (
    <form className={classes.form}>
      <Paper elevation={2}>
        <TextField label="Replace with" variant="outlined" size="small" />
      </Paper>
      <Button variant="contained" color="primary">
        replace
      </Button>
      <Button variant="contained" color="primary">
        replace all
      </Button>
    </form>
  );
};

export default ReplaceForm;
