import React, { useState } from 'react';
import Select from 'react-select';
import { CgClose } from 'react-icons/cg';
import '../layout/Admin/Candidatos/candidatos.scss';
import { BiCloudUpload } from 'react-icons/bi';
import tags from '../../data/tecnologias.json';
import Button from '../button/Button';

const CandidatoCreateForm = () => {
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
    <div className="candidato-form">
      <form className="row">
        <div className="col-6 row">
          <div className="col-12">
            <label htmlFor="nombre" className="form-label">Nombre y Apellidos</label>
            <input type="text" className="form-control" id="nombre" placeholder="Nombre Alumno" name="nombre" />
          </div>
          <div className="col-6">
            <label htmlFor="pais" className="form-label">País</label>
            <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg pais" name="pais" value="none">
              <option value="none">Elige un país</option>
              <option value="0">España</option>
              <option value="1">Argentina</option>
              <option value="2">Francia</option>
              <option value="3">Alemania</option>
            </select>
          </div>
          <div className="col-6">
            <label htmlFor="ciudad" className="form-label">Ciudad</label>
            <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg ciudad" name="ciudad" value="none">
              <option value="none">Elige una ciudad</option>
              <option value="0">Barcelona</option>
              <option value="1">Madrid</option>
              <option value="2">Bilbao</option>
              <option value="3">Valencia</option>
            </select>
          </div>
          <div className="col-6">
            <label htmlFor="telefono" className="form-label ">Nº Teléfono</label>
            <input type="tel" className="form-control num" id="telefono" placeholder="+34 654 85 52 48" name="telefono" />
          </div>
          <div className="col-6">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" placeholder="hcliment@gmail.com" name="email" />
          </div>
          <div className="col-6">
            <label htmlFor="presencialidad" className="form-label">Presencialidad</label>
            <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg presencialidad" name="presencialidad" value={0}>
              <option value={0}>En remoto</option>
              <option value={1}>Presencial</option>
            </select>
          </div>
          <div className="col-6">
            <label htmlFor="traslado" className="form-label">Traslado</label>
            <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg traslado" name="traslado" value={0}>
              <option value="0">No</option>
              <option value="1">Si</option>
            </select>
          </div>
          <div className="col-12">
            <label htmlFor="nombre" className="form-label">Perfil Linkedin</label>
            <input type="text" className="form-control" id="nombre" placeholder="Enlace a LinkedIn" name="nombre" />
          </div>
        </div>
        <div className="col-6">
          <div className="mb-4 file-input">
            <label htmlFor="cv" className="form-label">Foto de perfil</label>
            <div className="row">
              <div className="col-auto pe-0 file-btn">
                <input type="file" name="foto-perfil" id="foto-perfil" />
                <Button
                  label="Subir imágen"
                  color="secondary"
                >
                  <BiCloudUpload />
                </Button>
              </div>
              <div className="col-auto p-0">
                <p>
                  Archivos soportados:
                  {' '}
                  <span>.png, .jpg, y .jpeg</span>
                </p>
                <p>
                  Tamaño de archivo máximo:
                  {' '}
                  <span>2 MB</span>
                  {' '}
                </p>
              </div>
            </div>
          </div>
          <div className="mb-4 file-input">
            <label htmlFor="cv" className="form-label">Documento CV</label>
            <div className="row">
              <div className="col-auto pe-0 file-btn">
                <input type="file" name="cv" id="cv" />
                <Button
                  label="Subir documento PDF"
                  color="secondary"
                >
                  <BiCloudUpload />
                </Button>
              </div>
              <div className="col-auto p-0">
                <p>
                  Archivos soportados:
                  {' '}
                  <span>.png, .jpg, y .jpeg</span>
                </p>
                <p>
                  Tamaño de archivo máximo:
                  {' '}
                  <span>2 MB</span>
                  {' '}
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 mb-3 tag-selector">
            <label htmlFor="etiquetas" className="form-label">Etiquetas</label>
            <Select className="form-control" placeholder="Escribe para buscar...." name="etiquetas" isMulti options={tags} value={selectedTags} onChange={handleTagsChange} classNamePrefix="tag-select" />
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
        </div>
      </form>
    </div>
  );
};

export default CandidatoCreateForm;
