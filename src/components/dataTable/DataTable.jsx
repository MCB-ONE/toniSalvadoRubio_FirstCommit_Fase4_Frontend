/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';

/** Import styles */
import './dataTable.scss';

function DataTable({ items, renderHeaad, renderRow }) {
  return (
    <div className="cm-table">
      <table className="table">
        <thead>
          {renderHeaad()}
        </thead>
        <tbody>
          {items.map((row) => renderRow(row))}
        </tbody>
      </table>
    </div>
  );
}

DataTable.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  items: PropTypes.array.isRequired,
  renderHeaad: PropTypes.func.isRequired,
  renderRow: PropTypes.func.isRequired,
};

export default DataTable;
