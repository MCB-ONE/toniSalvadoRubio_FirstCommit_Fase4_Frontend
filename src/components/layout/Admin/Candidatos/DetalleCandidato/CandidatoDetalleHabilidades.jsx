import React, { useState } from 'react';
import Select from 'react-select';
import { CgClose } from 'react-icons/cg';
import tecnologias from '../../../../../data/tecnologias.json';
import idiomas from '../../../../../data/idiomas.json';

const CandidatoDetalleHabilidades = () => {
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

  const [selectedIdiomas, setSelectedIdiomas] = useState(null);
  const handleIdiomasChange = (e) => {
    setSelectedIdiomas(e);
  };
  const deleteIidoma = (value) => {
    const newState = selectedIdiomas.filter((idioma) => {
      return idioma.id !== value;
    });
    setSelectedTags(newState);
  };

  return (
    <div className="candidato-habilidades row">
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
      <div className="col-12 mb-3 tag-selector">
        <label htmlFor="idiomas" className="form-label">Idiomas</label>
        <Select className="form-control" placeholder="Escribe para buscar...." name="idiomas" isMulti options={idiomas} value={selectedIdiomas} onChange={handleIdiomasChange} classNamePrefix="tag-select" />
        {
            selectedIdiomas === null ? ''
              : (
                <div id="tag-list" className="tag-list">
                  {selectedIdiomas.map((t) => (
                    <span key={t.id}>
                      {t.label}
                      <CgClose onClick={() => deleteIidoma(t.id)} />
                    </span>
                  ))}
                </div>
              )
        }
      </div>
    </div>
  );
};

export default CandidatoDetalleHabilidades;
