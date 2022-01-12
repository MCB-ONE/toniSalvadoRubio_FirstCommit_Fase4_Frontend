import React from 'react';
import PropTypes from 'prop-types';
import { IoMdAdd } from 'react-icons/io';
/** Candidatos style */
import '../Candidatos/candidatos.scss';
import FilterSearch from '../../../filterSearch/FilterSearch';

const ClientesNavbar = ({ title, query, setQuery }) => {
  return (
    <div className="candidatos-navbar">
      <h2 className="section-title">{title}</h2>
      <FilterSearch
        query={query}
        setQuery={setQuery}
      />
      <button type="button" className="btn btn-outline-light">
        <IoMdAdd />
        Añadir
        cliente
      </button>
    </div>
  );
};

ClientesNavbar.propTypes = {
  title: PropTypes.string.isRequired,
  query: PropTypes.string.isRequired,
  setQuery: PropTypes.func.isRequired,
};

export default ClientesNavbar;
