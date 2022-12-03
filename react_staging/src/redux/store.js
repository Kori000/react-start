import { combineReducers, legacy_createStore as createStore } from 'redux';


import countReducer from './reducers/count';
import personReducer from './reducers/person';

import { composeWithDevTools } from 'redux-devtools-extension';

const allRedecers = combineReducers({
  count: countReducer,
  person: personReducer
})


export default createStore(allRedecers, composeWithDevTools())


