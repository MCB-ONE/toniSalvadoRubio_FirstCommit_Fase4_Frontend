import React from 'react';
import { GoChevronDown } from 'react-icons/go';
import FilterSearch from '../../filterSearch/FilterSearch';

const AdminHeader = () => {
  return (
    <header className="admin-header">
      <FilterSearch
        bgColor="light"
        marginStart
      />
      <div className="profile">
        <div className="profile-img">
          <h4>NA</h4>
        </div>
        <span className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
            href="/admin"
            role="button"
            aria-expanded="false"
          >
            Nombre
            <GoChevronDown />

          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/admin">Perfil</a></li>
          </ul>
        </span>
      </div>
    </header>
  );
};

export default AdminHeader;
