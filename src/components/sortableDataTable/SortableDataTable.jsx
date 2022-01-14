import React from 'react';
import PropTypes from 'prop-types';
/** Styles import */
import './dataTable.scss';
import { Link } from 'react-router-dom';
import TableHeader from './TableHeader';
import TagsList from '../tags/TagsList';
import useSortableData from '../../hooks/useSortableData';

const SortableDataTable = ({ data, columns }) => {
  // Use custom hook
  const { items, requestSort } = useSortableData(data);
  // Conditional styles for estado labels
  const renderSwitch = (value) => {
    switch (value) {
      case 'Contratado':
        return 'contratado';
      case 'Preseleccionado':
        return 'preseleccionado';
      case 'PDTE. Ofertas':
        return 'pendiente';
      default:
        return 'contratado';
    }
  };

  return (
    <div className="cm-table">
      <table className="table">
        <thead>
          <tr>
            {columns.map((col) => {
              const { label, sortable, isTag } = col;
              return (
                <TableHeader
                  key={label}
                  label={label}
                  sortable={sortable}
                  onClick={() => requestSort({ label, isTag })}
                />
              );
            })}
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              {columns.map((column) => {
                // eslint-disable-next-line no-nested-ternary
                return column.isTag
                  ? (
                    <td key={item[column.label]} className="tags">
                      {column.link
                        ? (
                          <Link to={column.link.to}>
                            <TagsList data={item[column.label]} />
                          </Link>
                        ) : (
                          <TagsList data={item[column.label]} />
                        )}
                    </td>
                  )
                  // eslint-disable-next-line no-nested-ternary
                  : column.isState
                    ? (
                      <td className="estado" key={item[column.label]}>
                        {column.link
                          ? (
                            <Link to={column.link.to}>
                              <span>{item[column.label]}</span>
                            </Link>
                          ) : (
                            <span className={renderSwitch(item[column.label])}>
                              {item[column.label]}
                            </span>
                          )}
                      </td>
                    ) : column.isNum
                      ? (
                        <td key={item[column.label]} className="num">
                          {column.link
                            ? (
                              <Link to={column.link.to}>
                                {item[column.label]}
                              </Link>
                            ) : (
                              <>{item[column.label]}</>
                            )}
                        </td>
                      )
                      : (
                        <td key={item[column.label]}>
                          {column.link
                            ? (
                              <Link to={column.link.to}>
                                {item[column.label]}
                              </Link>
                            ) : (
                              <>{item[column.label]}</>
                            )}
                        </td>
                      );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

SortableDataTable.propTypes = {
  data: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
};

export default SortableDataTable;
