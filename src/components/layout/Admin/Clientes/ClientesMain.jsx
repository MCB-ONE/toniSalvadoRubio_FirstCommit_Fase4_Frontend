import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import SortableDataTable from '../../../sortableDataTable/SortableDataTable';
import TableNavbar from '../TableNavbar';

const ClientesMain = () => {
  const clientesList = useSelector((state) => state.clientes.list);
  const [query, setQuery] = useState('');
  return (
    <div className="candidatos-main">
      <TableNavbar
        title="Clientes"
        query={query}
        setQuery={setQuery}
        buttonLabel="Añadir cliente"
      />
      <SortableDataTable
        data={clientesList}
        columns={[
          { label: 'empresa', sortable: true },
          { label: 'ubicación', sortable: true },
          { label: 'teléfono', sortable: false, isNum: true },
          { label: 'email', sortable: true },
          { label: 'tecnologias', sortable: true, isTag: true },
        ]}
      />
    </div>
  );
};

export default ClientesMain;
