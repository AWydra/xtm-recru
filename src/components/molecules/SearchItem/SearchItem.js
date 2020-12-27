import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import ReactHtmlParser from 'react-html-parser';
import { Card, CardContent, Typography, makeStyles } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles((theme) => ({
  card: {
    margin: theme.spacing(2, 0),
    '& .searchmatch': {
      backgroundColor: '#efff4c',
    },
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

const SearchItem = ({ title, snippet }) => {
  const classes = useStyles();
  const loading = useSelector((state) => state.loading);

  return (
    <Card className={classes.card}>
      <CardContent className={classes.content}>
        <Typography className={classes.heading} component="h5" variant="h5" color="primary">
          {loading ? <Skeleton variant="text" /> : title}
        </Typography>
        <Typography component="p" variant="subtitle1" color="textSecondary">
          {loading ? (
            <Skeleton variant="rect" width="100%" height={56} />
          ) : (
            ReactHtmlParser(snippet)
          )}
        </Typography>
      </CardContent>
    </Card>
  );
};

SearchItem.propTypes = {
  title: PropTypes.string.isRequired,
  snippet: PropTypes.string.isRequired,
};

export default SearchItem;
