import {combineReducers} from 'redux';

import User from './users';
import Estabelecimentos from './estabelecimentos';

export default combineReducers({
  User,
  Estabelecimentos,
});
