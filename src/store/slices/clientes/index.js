import { createSlice } from '@reduxjs/toolkit';
import data from '../../../data/clientes.json';

// Testing redux whit static data
export const clientesSlice = createSlice({
  name: 'clientes',
  initialState: {
    list: [],
  },
  reducers: {
    setClientesLsit: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { setClientesLsit } = clientesSlice.actions;

export default clientesSlice.reducer;

export const fetchAllClientes = (dispatch) => {
  // Setting static data to testing
  return dispatch(setClientesLsit(data));
};
