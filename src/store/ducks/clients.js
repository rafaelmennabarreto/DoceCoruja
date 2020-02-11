import {createActions, createReducer} from 'reduxsauce';

const INITIAL_STATE = [];

export const {Types, Creators} = createActions({
  addClient: ['user'],
  addClients: ['user'],
});

const addClient = (state = INITIAL_STATE, action) => [...state, action.payload];
const addClients = (state = INITIAL_STATE, action) => [...action.payload];

export default createReducer(INITIAL_STATE, {
  [Types.ADD_CLIENT]: addClient,
  [Types.ADD_CLIENTS]: addClients,
});
