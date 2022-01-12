import React from 'react';
import PropTypes from 'prop-types';
import { GoSearch } from 'react-icons/go';

/** Styles */
import './filterSearch.scss';

const FilterSearch = ({
  query, setQuery, bgColor, marginStart,
}) => {
  const ms = marginStart ? 'ms' : '';
  const formStyle = `form-inline search ${ms}`;
  const inputStyle = `form-control ${bgColor}`;

  return (
    <form className={formStyle}>
      <GoSearch />
      <input
        className={inputStyle}
        type="search"
        placeholder="Buscar por Nombre, Email o Palabra clave..."
        aria-label="Search"
        value={query}
        onChange={(val) => setQuery(val.target.value)}
      />
    </form>
  );
};

FilterSearch.propTypes = {
  query: PropTypes.string,
  setQuery: PropTypes.func,
  bgColor: PropTypes.oneOf(['default', 'light']),
  marginStart: PropTypes.oneOf([true, false]),
};

FilterSearch.defaultProps = {
  query: '',
  setQuery: (val) => console.log(val),
  bgColor: 'default',
  marginStart: false,
};

export default FilterSearch;
