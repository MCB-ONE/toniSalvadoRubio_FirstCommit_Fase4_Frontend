import { createSlice } from '@reduxjs/toolkit';
import data from '../../../data/alumnos.json';

// Testing redux whit static data
export const alumnosSlice = createSlice({
  name: 'alumnos',
  initialState: {
    list: [],
  },
  reducers: {
    setAlumnosLsit: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { setAlumnosLsit } = alumnosSlice.actions;

export default alumnosSlice.reducer;

export const fetchAllAlumnos = (dispatch) => {
  // Setting static data to testing
  return dispatch(setAlumnosLsit(data));
};
