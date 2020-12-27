import produce from 'immer';
import replaceMathTo, { regexp } from 'utils/replaceMathTo';

const initialState = {
  loading: true,
  items: [],
  heading: 'Search all Wikipedia!',
};

const arrayPlaceholder = [
  ...Array(10).fill({
    title: '',
    snippet: '',
  }),
];

const wikiReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return produce(state, (draftState) => {
        draftState.loading = action.payload;
        draftState.items = arrayPlaceholder;
        draftState.heading = 'Try another word...';
      });
    case 'SET_ITEMS':
      return produce(state, (draftState) => {
        draftState.items = action.payload;
      });
    case 'REPLACE_WORD':
      return produce(state, (draftState) => {
        const index = state.items.findIndex((item) => regexp.test(item.snippet));
        if (index >= 0) {
          const item = state.items[index];
          draftState.items[index] = {
            ...item,
            snippet: replaceMathTo(item.snippet, action.payload),
          };
        }
      });
    case 'REPLACE_ALL_WORDS':
      return produce(state, (draftState) => {
        draftState.items = state.items.map((item) => ({
          ...item,
          snippet: replaceMathTo(item.snippet, action.payload, true),
        }));
      });
    case 'SET_HEADING':
      return produce(state, (draftState) => {
        draftState.heading = action.payload;
      });
    default:
      return state;
  }
};

export default wikiReducer;
