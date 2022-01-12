import React from 'react';
import { NavLink } from 'react-router-dom';
import { BiBriefcase, BiBuildings } from 'react-icons/bi';
import { FiUsers } from 'react-icons/fi';
import { FaRegCalendarAlt } from 'react-icons/fa';

const AdminSidebar = () => {
  return (
    <div className="admin-sidebar d-flex flex-column flex-shrink-0 cm-text--light bg-dark">
      <h1 className="admin-logo">
        Open
        <span>Recruiter</span>
      </h1>
      <nav>
        <ul>
          <li>
            <NavLink to="ofertas" className={({ isActive }) => (isActive ? 'navlink navlink-active' : 'navlink')}>
              {' '}
              <BiBriefcase />
              Ofertas
            </NavLink>
          </li>
          <li>
            <NavLink to="candidatos" className={({ isActive }) => (isActive ? 'navlink navlink-active' : 'navlink')}>
              {' '}
              <FiUsers />
              Candidatos
            </NavLink>
          </li>
          <li>
            <NavLink to="clientes" className={({ isActive }) => (isActive ? 'navlink navlink-active' : 'navlink')}>
              {' '}
              <BiBuildings />
              Clientes
            </NavLink>
          </li>
          <li>
            <NavLink to="entrevistas" className={({ isActive }) => (isActive ? 'navlink navlink-active' : 'navlink')}>
              {' '}
              <FaRegCalendarAlt />
              Entrevistas
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default AdminSidebar;
