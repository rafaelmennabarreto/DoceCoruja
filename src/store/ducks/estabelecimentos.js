import {createActions, createReducer} from 'reduxsauce';
import {sortByName} from '~/util/sortUtil';

const INITIAL_STATE = [];

export const {Types, Creators} = createActions({
  addEstabelecimento: ['Estabelecimentos'],
  addOneEstabelecimento: ['Estabelecimento'],
  updateEstabelecimento: ['Estabelecimento'],
  removeEstabelecimento: ['Estabelecimento'],
});

const add = (state = INITIAL_STATE, action) =>
  [...state, ...action.payload].sort(sortByName);

const addOne = (state = INITIAL_STATE, action) => {
  const newState = state;
  newState.push(action.payload);
  return newState.sort(sortByName);
};

const update = (state = INITIAL_STATE, action) => {
  const newEstabelecimento = action.payload;
  const newState = state.filter(e => e.id !== newEstabelecimento.id);
  return [...newState, newEstabelecimento].sort(sortByName);
};

const remove = (state = INITIAL_STATE, action) => {
  const newState = state;
  return newState.filter(e => e.id !== action.payload.id).sort(sortByName);
};

export default createReducer(INITIAL_STATE, {
  [Types.ADD_ESTABELECIMENTO]: add,
  [Types.ADD_ONE_ESTABELECIMENTO]: addOne,
  [Types.UPDATE_ESTABELECIMENTO]: update,
  [Types.REMOVE_ESTABELECIMENTO]: remove,
});
