const setLoading = (loading) => ({
  type: 'SET_LOADING',
  payload: loading,
});

const setItems = (items) => ({
  type: 'SET_ITEMS',
  payload: items,
});

const replaceWord = (word) => ({
  type: 'REPLACE_WORD',
  payload: word,
});

const replaceAllWords = (word) => ({
  type: 'REPLACE_ALL_WORDS',
  payload: word,
});

const setHeading = (word) => ({
  type: 'SET_HEADING',
  payload: word,
});

export default { setLoading, setItems, replaceWord, replaceAllWords, setHeading };
