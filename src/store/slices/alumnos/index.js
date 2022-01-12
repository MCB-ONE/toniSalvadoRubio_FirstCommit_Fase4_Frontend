import { createSlice } from '@reduxjs/toolkit';
import data from '../../../data/alumnos.json';

export const alumnosSlice = createSlice({
  name: 'alumnos',
  initialState: {
    list: data,
  },
  reducers: {

  },
});

export default alumnosSlice.reducer;

/** Actions  */
/* export const fetchAllAlumnos = () => {

} */
