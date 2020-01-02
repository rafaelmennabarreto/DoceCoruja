import {createActions, createReducer} from 'reduxsauce';
import userFactory from '../../factory/userFactory';

const INITIAL_STATE = userFactory.generateUser({});

export const {Types, Creators} = createActions({
  addUser: ['user'],
});

const addUser = (state = INITIAL_STATE, action) => action.payload;

export default createReducer(INITIAL_STATE, {
  [Types.ADD_USER]: addUser,
});
