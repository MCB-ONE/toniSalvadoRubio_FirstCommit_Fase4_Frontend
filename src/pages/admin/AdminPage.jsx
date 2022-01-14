import React, { useEffect } from 'react';
/** Redux imports */
import { useDispatch } from 'react-redux';
import {
  Outlet,
} from 'react-router-dom';
import { fetchAllAlumnos } from '../../store/slices/alumnos';
/** Layout import components */
import AdminSidebar from '../../components/layout/Admin/AdminSidebar';
import AdminHeader from '../../components/layout/Admin/AdminHeader';
/** Import styles */
import './adminPage.scss';
import { fetchAllClientes } from '../../store/slices/clientes';

const AdminPage = () => {
  const dispatch = useDispatch();
  /* const alumnos = []; */

  useEffect(() => {
    dispatch(fetchAllAlumnos);
    dispatch(fetchAllClientes);
  }, [dispatch]);
  return (
    <div className="admin-page">
      <AdminSidebar />
      <main className="admin-main">
        <AdminHeader />
        <div className="admin-content">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminPage;
