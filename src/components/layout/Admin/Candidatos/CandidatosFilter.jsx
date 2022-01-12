import React, { useState } from 'react';
import { IoTrashOutline } from 'react-icons/io5';
import { CgClose } from 'react-icons/cg';
import Select from 'react-select';
import tecnologias from '../../../../data/tecnologias.json';

const AdminSidebar = () => {
  const [selectedTags, setSelectedTags] = useState(null);
  const handleTagsChange = (e) => {
    setSelectedTags(e);
  };
  const deleteTag = (value) => {
    const newState = selectedTags.filter((tag) => {
      return tag.id !== value;
    });
    setSelectedTags(newState);
  };
  return (
    <div className="candidatos-filters">
      <div className="filters-form">
        <div className="row justify-content-between">
          <h5 className="col-auto section-title">Filtros de búsqueda</h5>
          <IoTrashOutline className="col-auto cm-text--green" />
        </div>
        <form>
          <div className="col-12 mb-3 tag-selector">
            <label htmlFor="etiquetas" className="form-label">Tecnologías</label>
            <Select className="form-control" placeholder="Escribe para buscar...." name="etiquetas" isMulti options={tecnologias} value={selectedTags} onChange={handleTagsChange} classNamePrefix="tag-select" />
            {
            selectedTags === null ? ''
              : (
                <div id="tag-list" className="tag-list">
                  {selectedTags.map((t) => (
                    <span key={t.id}>
                      {t.label}
                      <CgClose onClick={() => deleteTag(t.id)} />
                    </span>
                  ))}
                </div>
              )
        }
          </div>
          <div className="mb-3">
            <label htmlFor="pais" className="form-label">País</label>
            <select
              className="form-select form-select-lg mb-3"
              aria-label=".form-select-lg pais"
              defaultValue="españa"
            >
              <option value="españa">España</option>
              <option value="argentina">Argentina</option>
              <option value="frnacia">Francia</option>
              <option value="alemania">Alemania</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="ciudad" className="form-label">Ciudad</label>
            <select
              className="form-select form-select-lg mb-3"
              aria-label=".form-select-lg ciudad"
              defaultValue="barcelona"
            >
              <option value="barcelona">Barcelona</option>
              <option value="madrid">Madrid</option>
              <option value="bilbao">Bilbao</option>
              <option value="valencia">Valencia</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="presencialidad">Presencial/ a distancia</label>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="false" name="presencialidad" />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Presencial
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="true" name="presencialidad" />
              <label className="form-check-label" htmlFor="flexCheckChecked">
                En remoto
              </label>
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="traslado">Posibilidad traslado</label>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="true" name="traslado" />
              <label className="form-check-label " htmlFor="traslado">
                Si
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="false" name="traslado" />
              <label className="form-check-label" htmlFor="traslado">
                No
              </label>
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="estado">Estado</label>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="contratado" name="traslado" />
              <label className="form-check-label " htmlFor="traslado">
                Contratado
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="PDTE. Ofertas" name="traslado" />
              <label className="form-check-label" htmlFor="traslado">
                Pendiente de Ofertas
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="Preseleccionado" name="traslado" />
              <label className="form-check-label" htmlFor="traslado">
                Preseleccionado
              </label>
            </div>
          </div>
        </form>

      </div>
    </div>
  );
};

export default AdminSidebar;
