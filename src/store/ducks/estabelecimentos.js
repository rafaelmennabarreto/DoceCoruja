import {createActions, createReducer} from 'reduxsauce';

const INITIAL_STATE = [];

export const {Types, Creators} = createActions({
  addEstabelecimento: ['Estabelecimentos'],
  addOneEstabelecimento: ['Estabelecimento'],
});

const add = (state = INITIAL_STATE, action) => [...state, ...action.payload];
const addOne = (state = INITIAL_STATE, action) => [...state, action.payload];

export default createReducer(INITIAL_STATE, {
  [Types.ADD_ESTABELECIMENTO]: add,
  [Types.ADD_ONE_ESTABELECIMENTO]: addOne,
});
