import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import ducks from './ducks';

const store = createStore(ducks, applyMiddleware(thunk));

export default store;
