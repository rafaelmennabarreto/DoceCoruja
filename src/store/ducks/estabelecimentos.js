import {createActions, createReducer} from 'reduxsauce';

const INITIAL_STATE = [];

export const {Types, Creators} = createActions({
  addEstabelecimento: ['Estabelecimentos'],
  addOneEstabelecimento: ['Estabelecimento'],
  updateEstabelecimento: ['Estabelecimento'],
});

const add = (state = INITIAL_STATE, action) => [...state, ...action.payload];
const addOne = (state = INITIAL_STATE, action) => [...state, action.payload];
const update = (state = INITIAL_STATE, action) => {
  const newEstabelecimento = action.payload;
  const newState = state.filter(e => e.id != newEstabelecimento.id);
  return [...newState, newEstabelecimento];
};

export default createReducer(INITIAL_STATE, {
  [Types.ADD_ESTABELECIMENTO]: add,
  [Types.ADD_ONE_ESTABELECIMENTO]: addOne,
  [Types.UPDATE_ESTABELECIMENTO]: update,
});
