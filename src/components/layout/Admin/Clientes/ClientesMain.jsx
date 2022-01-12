/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DataTable from '../../../dataTable/DataTable';
import Th from '../../../dataTable/Th';
import removeAccents from '../../../../helpers/removeAccents';
/** Test Data import */
import json from '../../../../data/alumnos.json';
import ClientesNavbar from './ClientesNavbar';

const searchableColumns = ['nombre', 'email', 'ciudad'];

const ClientesMain = () => {
  const [state, setState] = useState({
    data: json,
    sortedBy: { nombre: 'ascending' },
  });

  const [query, setQuery] = useState('');
  // Search method
  const search = (data) => {
    return data.filter((row) => searchableColumns.some(
      (column) => row[column]
        .toString()
        .toLowerCase()
        .indexOf(query.toLowerCase()) > -1,
    ));
  };

  useEffect(() => {
    if (!state.sortedBy) return;
    const sortKey = Object.keys(state.sortedBy)[0];
    const direction = state.sortedBy[sortKey];
    if (sortKey !== 'tecnologias') {
      setState((prev) => ({
        ...prev,
        // Sort method
        data: prev.data.sort((a, b) => {
          if (direction === 'ascending') {
            if (removeAccents(a[sortKey]) > removeAccents(b[sortKey])) return 1;
            if (removeAccents(a[sortKey]) < b[sortKey]) return -1;
            return 0;
          }
          if (removeAccents(a[sortKey]) < removeAccents(b[sortKey])) return 1;
          if (removeAccents(a[sortKey]) > removeAccents(b[sortKey])) return -1;
          return 0;
        }),
      }));
    } else {
      setState((prev) => ({
        ...prev,
        // Sort method
        data: prev.data.sort((a, b) => {
          if (direction === 'ascending') {
            if (removeAccents(a[sortKey][0]) > removeAccents(b[sortKey][0])) {
              return 1;
            }
            if (removeAccents(a[sortKey][0]) < b[sortKey][0]) return -1;
            return 0;
          }
          if (removeAccents(a[sortKey][0]) < removeAccents(b[sortKey][0])) return 1;
          if (removeAccents(a[sortKey][0]) > removeAccents(b[sortKey][0])) return -1;
          return 0;
        }),
      }));
    }
  }, [state.sortedBy]);

  // UseEffect to dispatch search filter
  useEffect(() => {
    setState((prev) => ({
      ...prev,
      data: search(json),
    }));
  }, [query]);

  const navigate = useNavigate();
  const detailRedirect = () => {
    navigate('/admin/candidato');
  };

  return (
    <div className="candidatos-main">
      <ClientesNavbar title="Clientes" query={query} setQuery={setQuery} />
      <DataTable
        items={state.data}
        renderHeaad={() => (
          <tr>
            <Th
              key="nombre"
              label="nombre"
              sortedBy={state.sortedBy}
              sort={{ sortable: true, key: 'nombre', changer: setState }}
            />
            <Th
              key="ubicación"
              label="ubicación"
              sortedBy={state.sortedBy}
              sort={{ sortable: true, key: 'ciudad', changer: setState }}
            />
            <Th
              key="telefono"
              label="teléfono"
              sortedBy={state.sortedBy}
              sort={{ sortable: false, key: 'tecnologias', changer: setState }}
            />
            <Th
              key="email"
              label="Email"
              sortedBy={state.sortedBy}
              sort={{ sortable: false, key: 'email', changer: setState }}
            />
            <Th
              key="tecnologias"
              label="tecnologías"
              sortedBy={state.sortedBy}
              sort={{ sortable: true, key: 'tecnologias', changer: setState }}
            />
          </tr>
        )}
        renderRow={(row) => (
          <tr>
            <td key={0} onClick={detailRedirect}>{row.nombre}</td>
            <td key={1}>
              {`${row.ciudad}, ${row.país}`}
            </td>
            <td key={3} className="num">{row.teléfono}</td>
            <td className="estado" key={5}>{row.email}</td>
            <td className="tags" key={4}>
              <span key={0}>{row.tecnologias[0]}</span>
              <span key={1}>{row.tecnologias[1]}</span>
              {row.tecnologias.length >= 3 ? (
                <span key={2} className="num">
                  +
                  {row.tecnologias.length - 2}
                </span>
              ) : null}
            </td>
          </tr>
        )}
      />
    </div>
  );
};

export default ClientesMain;
