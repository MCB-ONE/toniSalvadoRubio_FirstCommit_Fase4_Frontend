/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { BiSortAlt2 } from 'react-icons/bi';

const Th = ({ sortedBy, sort, label }) => {
  const changeSort = (direction) => {
    sort.changer((prev) => ({
      ...prev,
      sortedBy: {
        [sort.key]: direction,
      },
    }));
  };
  return (
    <th>
      {label}
      {sort.sortable ? (
        <>
          {sortedBy && sortedBy[sort.key] === 'ascending' ? (
            <BiSortAlt2
              onClick={() => changeSort('descending')}
            />
          ) : (
            <BiSortAlt2
              onClick={() => changeSort('ascending')}
            />
          )}
        </>
      ) : null}
    </th>
  );
};

Th.propTypes = {
  sortedBy: PropTypes.object.isRequired,
  sort: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
};

export default Th;
