import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Typography } from '@material-ui/core';
import SearchItem from 'components/molecules/SearchItem/SearchItem';

const Results = () => {
  const items = useSelector((state) => state.items);
  const heading = useSelector((state) => state.heading);

  return (
    <Box py={6}>
      {items.length > 0 ? (
        items.map(({ title, snippet, pageid }) => (
          <SearchItem key={pageid} title={title} snippet={snippet} />
        ))
      ) : (
        <Box component={Typography} textAlign="center" variant="h3">
          {heading}
        </Box>
      )}
    </Box>
  );
};

export default Results;
