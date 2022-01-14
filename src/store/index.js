import { configureStore } from '@reduxjs/toolkit';
import alumnos from './slices/alumnos/index';
import clientes from './slices/clientes/index';
// Default full initilai state to test

export default configureStore({
  reducer: {
    alumnos,
    clientes,
  },
});
