import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import wikiReducer from 'reducers/wikiReducer';

export const store = createStore(wikiReducer, composeWithDevTools(applyMiddleware(thunk)));
export default store;
