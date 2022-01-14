/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { BiSortAlt2 } from 'react-icons/bi';

const TableHeader = ({
  label, sortable, onClick,
}) => {
  return (
    <th>
      {label}
      {sortable ? (
        <>
          <BiSortAlt2 onClick={() => onClick()} />
        </>
      ) : null}
    </th>
  );
};

TableHeader.propTypes = {
  onClick: PropTypes.func.isRequired,
  sortable: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
};

export default TableHeader;
