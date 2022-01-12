import React from 'react';
import {
  BrowserRouter, Routes, Route, Navigate,
} from 'react-router-dom';
import AdminPage from '../pages/admin/AdminPage';
import HomePage from '../pages/home/HomePage';
import CandidatosLayout from './layout/Admin/Candidatos/CandidatosLayout';
import DetalleCandidatoLayout from './layout/Admin/Candidatos/DetalleCandidato/DetalleCandidatoLayout';
import ClientesLayout from './layout/Admin/Clientes/ClientesLayout';
import NotFoundPage from '../pages/notFound/NotFoundPage';
/**
 * Función Anónima para crear un Componente principal
 * @returns {React.Component} Componente principal de nuestra aplicación
 */

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin/*" element={<AdminPage />}>
          <Route path="" element={<Navigate to="/admin/candidatos" />} />
          <Route path="candidatos/*" element={<CandidatosLayout />} />
          <Route path="candidatos/id" element={<DetalleCandidatoLayout />} />
          <Route path="clientes" element={<ClientesLayout />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
