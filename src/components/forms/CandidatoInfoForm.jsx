import React from 'react';
import { BiCloudUpload } from 'react-icons/bi';
import { IoTrashOutline } from 'react-icons/io5';
import Button from '../button/Button';

const CandidatoInfoForm = () => {
  return (
    <div className="candidato-form">
      <form className="row">
        <div className="col-12">
          <label htmlFor="nombre" className="form-label">Nombre y Apellidos</label>
          <input type="text" className="form-control" id="nombre" placeholder="Nombre Alumno" name="nombre" />
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
          <label htmlFor="pais" className="form-label">País</label>
          <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg pais" name="pais" defaultValue="0">
            <option>Elige un país</option>
            <option value="0">España</option>
            <option value="1">Argentina</option>
            <option value="2">Francia</option>
            <option value="3">Alemania</option>
          </select>
        </div>
        <div className="col-6">
          <label htmlFor="ciudad" className="form-label">Ciudad</label>
          <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg ciudad" name="ciudad" defaultValue="3">
            <option>Elige una ciudad</option>
            <option value="0">Barcelona</option>
            <option value="1">Madrid</option>
            <option value="2">Bilbao</option>
            <option value="3">Valencia</option>
          </select>
        </div>
        <div className="col-6">
          <label htmlFor="presencialidad" className="form-label">Presencialidad</label>
          <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg presencialidad" name="presencialidad" defaultValue="0">
            <option value="0">En remoto</option>
            <option value="1">Presencial</option>
          </select>
        </div>
        <div className="col-6">
          <label htmlFor="traslado" className="form-label">Traslado</label>
          <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg traslado" name="traslado" defaultValue="0">
            <option value="0">No</option>
            <option value="1">Si</option>
          </select>
        </div>
        <div className="col-6">
          <label htmlFor="linkedin" className="form-label">Enlace Linkedin</label>
          <input type="text" className="form-control" id="linkedin" placeholder="Enlace a LinkedIn" name="linkedin" />
        </div>
        <div className="col-6">
          <label htmlFor="estado-laboral" className="form-label">Estado laboral</label>
          <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg traslado" name="estado-laboral" defaultValue="contratado">
            <option value="contratado">Contratado</option>
            <option value="pdte-ofertas">PDTE. Ofertas</option>
            <option value="preseleccionado">Preseleccionado</option>
          </select>
        </div>
        <div className="col-12 mb-4">
          <label htmlFor="cv-upload" className="form-label">Documento CV</label>
          <div>
            <div className="file-upload">
              <Button
                label="Subir documento PDF"
                color="secondary"
              >
                <BiCloudUpload />
              </Button>
              <input type="file" id="cv-upload" />
            </div>
            <Button
              label="Borrar"
              variant="outline"
              color="light"
            >
              <IoTrashOutline />
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CandidatoInfoForm;
