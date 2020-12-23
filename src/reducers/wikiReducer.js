import produce from 'immer';

const initialState = {
  loading: true,
};

const wikiReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return produce(state, (draftState) => {
        draftState.loading = action.payload;
      });
    default:
      return state;
  }
};

export default wikiReducer;
