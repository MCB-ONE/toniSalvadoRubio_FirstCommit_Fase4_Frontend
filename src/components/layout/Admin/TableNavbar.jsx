import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { IoMdAdd } from 'react-icons/io';
import Modal from '../../modal/Modal';
import FilterSearch from '../../filterSearch/FilterSearch';
import Button from '../../button/Button';

const TableNavbar = ({
  title, query, setQuery, buttonLabel, searchPlaceholder,
}) => {
  const [modalState, setModalState] = useState(false);
  return (
    <div className="table-navbar">
      <h2 className="section-title">{title}</h2>
      <FilterSearch
        query={query}
        setQuery={setQuery}
        searchPlaceholder={searchPlaceholder}
      />
      <Button
        variant="outline"
        color="light"
        label={buttonLabel}
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

TableNavbar.propTypes = {
  title: PropTypes.string.isRequired,
  query: PropTypes.string.isRequired,
  setQuery: PropTypes.func.isRequired,
  buttonLabel: PropTypes.string.isRequired,
  searchPlaceholder: PropTypes.string.isRequired,
};

export default TableNavbar;
