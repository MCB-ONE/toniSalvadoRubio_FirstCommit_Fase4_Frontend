import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import SortableDataTable from '../../../sortableDataTable/SortableDataTable';
import TableNavbar from '../TableNavbar';

const CandidatosMain = () => {
  const alumnosList = useSelector((state) => state.alumnos.list);
  const [state, setState] = useState(alumnosList);
  const [query, setQuery] = useState('');
  const searchableColumns = ['nombre', 'ubicación', 'estado'];

  // Search method
  const search = (data) => {
    return data.filter((row) => searchableColumns.some(
      (column) => row[column]
        .toString()
        .toLowerCase()
        .indexOf(query.toLowerCase()) > -1,
    ));
  };
  // UseEffect to dispatch search filter
  useEffect(() => {
    setTimeout(setState(search(alumnosList)));
  }, [query]);
  console.log(state);

  return (
    <div className="candidatos-main">
      <TableNavbar
        title="Candidatos"
        searchPlaceholder="Buscar por Nombre, Ubicación o palabra clave..."
        query={query}
        setQuery={setQuery}
        buttonLabel="Añadir candidato"
      />
      <SortableDataTable
        data={state}
        columns={[
          { label: 'nombre', sortable: true, link: { to: 'id' } },
          { label: 'ubicación', sortable: true },
          { label: 'teléfono', sortable: false, isNum: true },
          { label: 'tecnologías', sortable: true, isTag: true },
          { label: 'estado', sortable: true, isState: true },
        ]}
      />
    </div>
  );
};

export default CandidatosMain;
