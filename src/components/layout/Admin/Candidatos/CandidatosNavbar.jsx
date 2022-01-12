import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { IoMdAdd } from 'react-icons/io';
import Modal from '../../../modal/Modal';
/** Candidatos style */
import './candidatos.scss';
import FilterSearch from '../../../filterSearch/FilterSearch';
import Button from '../../../button/Button';

const CandidatosNavbar = ({ title, query, setQuery }) => {
  const [modalState, setModalState] = useState(false);
  return (
    <div className="candidatos-navbar">
      <h2 className="section-title">{title}</h2>
      <FilterSearch
        query={query}
        setQuery={setQuery}
      />
      {/* <button type="button"
      className="btn btn-outline-light" onClick={() => setModalState(true)}>
        <IoMdAdd />
        Añadir
        alumnos
      </button> */}
      <Button
        variant="outline"
        color="light"
        label="Añadir alumnos"
        onClick={() => setModalState(true)}
      >
        <IoMdAdd />
      </Button>
      <Modal
        state={modalState}
        changeState={setModalState}
      />
    </div>
  );
};

CandidatosNavbar.propTypes = {
  title: PropTypes.string.isRequired,
  query: PropTypes.string.isRequired,
  setQuery: PropTypes.func.isRequired,
};

export default CandidatosNavbar;
