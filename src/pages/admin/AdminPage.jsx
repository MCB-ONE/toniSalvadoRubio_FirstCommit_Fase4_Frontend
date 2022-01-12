import React from 'react';
import {
  Outlet,
} from 'react-router-dom';
import AdminSidebar from '../../components/layout/Admin/AdminSidebar';
import AdminHeader from '../../components/layout/Admin/AdminHeader';
/** Import styles */
import './adminPage.scss';
/* import CandidatosLayout from '../../components/layout/Admin/Candidatos/CandidatosLayout'; */

const AdminPage = () => {
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
