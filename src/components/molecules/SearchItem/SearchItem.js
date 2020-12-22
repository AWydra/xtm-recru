import React from 'react';
import { Card, CardContent, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  card: {
    margin: theme.spacing(2, 0),
  },
  content: {
    padding: theme.spacing(2),
    '&:last-child': {
      padding: theme.spacing(2),
    },
  },
  heading: {
    marginBottom: theme.spacing(1),
  },
}));

const SearchItem = () => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent className={classes.content}>
        <Typography className={classes.heading} component="h5" variant="h5" color="primary">
          Heading
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, officiis?
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SearchItem;
