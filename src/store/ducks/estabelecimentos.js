import {createActions, createReducer} from 'reduxsauce';

const INITIAL_STATE = [];

export const {Types, Creators} = createActions({
  addEstabelecimento: ['Estabelecimentos'],
});

const add = (state = INITIAL_STATE, action) => [...state, ...action.payload];

console.log(Types.ADD_ESTABELECIMENTO);

export default createReducer(INITIAL_STATE, {
  [Types.ADD_ESTABELECIMENTO]: add,
});
