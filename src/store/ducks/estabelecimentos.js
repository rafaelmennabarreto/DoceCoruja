import {createActions, createReducer} from 'reduxsauce';

const INITIAL_STATE = [];

export const {Types, Creators} = createActions({
  addEstabelecimento: ['estabelecimento'],
});

const addEstabelecimento = (state = INITIAL_STATE, action) => [
  ...state,
  action.payload,
];

export default createReducer({
  [Types.ADD_ESTABELECIMENTO]: addEstabelecimento,
});
