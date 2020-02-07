import {combineReducers} from 'redux';

import User from './users';
import Estabelecimentos from './estabelecimentos';
import Clients from './clients';

export default combineReducers({
  User,
  Estabelecimentos,
  Clients,
});
