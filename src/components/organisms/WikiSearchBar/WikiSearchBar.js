import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Box } from '@material-ui/core';
import wikiServices from 'services/wikiServices';
import SeachBar from 'components/molecules/SearchBar/SearchBar';
import ReplaceForm from 'components/molecules/ReplaceForm/ReplaceForm';
import useDidUpdate from 'utils/useDidUpdate';

const WikiSerachBar = () => {
  const [id, setId] = useState(null);
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const handleChange = (ev) => {
    setValue(ev.target.value);
  };

  const handleSubmit = (ev) => {
    ev && ev.preventDefault();
    clearTimeout(id);
    value && dispatch(wikiServices.getData(value));
  };

  const handleClear = () => setValue('');

  useDidUpdate(() => {
    clearTimeout(id);
    setId(
      setTimeout(() => {
        if (value) {
          handleSubmit();
        }
      }, 1500),
    );
    return () => {
      clearTimeout(id);
    };
  }, [value]);

  return (
    <Box mt={10}>
      <SeachBar
        value={value}
        placeholder="Search phrase"
        onChange={handleChange}
        onSubmit={handleSubmit}
        onClear={handleClear}
      />
      <ReplaceForm />
    </Box>
  );
};

export default WikiSerachBar;
