import {createActions, createReducer} from 'reduxsauce';

const INITIAL_STATE = [];

export const {Types, Creators} = createActions({
  addClient: ['client'],
  addClients: ['clients'],
  removeOneClient: ['client'],
});

const addClient = (state = INITIAL_STATE, action) => [...state, action.payload];
const addClients = (state = INITIAL_STATE, action) => [...action.payload];
const removeClient = (state = INITIAL_STATE, action) => {
  console.log(state);
  const newState = state.filter(i => i.id !== action.payload.id);
  return newState;
};

export default createReducer(INITIAL_STATE, {
  [Types.ADD_CLIENT]: addClient,
  [Types.ADD_CLIENTS]: addClients,
  [Types.REMOVE_ONE_CLIENT]: removeClient,
});
