import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import wikiActions from 'actions/wikiActions';
import { Button, Paper, TextField, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  form: {
    marginTop: theme.spacing(5),
    display: 'flex',
    justifyContent: 'center',
    '& > *': {
      margin: theme.spacing(0, 1),
    },

    [theme.breakpoints.down('xs')]: {
      flexWrap: 'wrap',
    },
  },
  paper: {
    [theme.breakpoints.down('xs')]: {
      marginBottom: theme.spacing(2),
      flexBasis: '100%',
    },
  },
  input: {
    width: '100%',
  },
}));

const ReplaceForm = () => {
  const classes = useStyles();
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const handleChange = (ev) => {
    setValue(ev.target.value);
  };

  const handleReplace = () => {
    dispatch(wikiActions.replaceWord(value));
  };

  const handleReplaceAll = () => {
    dispatch(wikiActions.replaceAllWords(value));
  };

  return (
    <form className={classes.form}>
      <Paper className={classes.paper} elevation={2}>
        <TextField
          className={classes.input}
          label="Replace with"
          variant="outlined"
          size="small"
          value={value}
          onChange={handleChange}
        />
      </Paper>
      <Button variant="contained" color="primary" onClick={handleReplace}>
        replace
      </Button>
      <Button variant="contained" color="primary" onClick={handleReplaceAll}>
        replace all
      </Button>
    </form>
  );
};

export default ReplaceForm;
