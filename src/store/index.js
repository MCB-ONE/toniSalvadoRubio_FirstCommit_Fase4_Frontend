import { configureStore } from '@reduxjs/toolkit';
import alumnos from './slices/alumnos';

export default configureStore({
  reducer: {
    alumnos,
  },
});
