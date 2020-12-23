/* eslint-disable arrow-body-style */
import React from 'react';
import { Box } from '@material-ui/core';
import SeachBar from 'components/molecules/SearchBar/SearchBar';
import ReplaceForm from 'components/molecules/ReplaceForm/ReplaceForm';

const WikiSerachBar = () => {
  return (
    <Box mt={10}>
      <SeachBar placeholder="Search phrase" onSubmit={() => {}} />
      <ReplaceForm />
    </Box>
  );
};

export default WikiSerachBar;
