import { legacy_createStore as createStore } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';
import allRedecers from './reducers/index';


export default createStore(allRedecers, composeWithDevTools())


