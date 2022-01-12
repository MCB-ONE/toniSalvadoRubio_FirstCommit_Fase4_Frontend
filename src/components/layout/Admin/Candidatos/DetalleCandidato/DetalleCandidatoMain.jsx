import React from 'react';
import { IoLocationOutline } from 'react-icons/io5';
import { MdMyLocation } from 'react-icons/md';
import CandidatoInfoForm from '../../../../forms/CandidatoInfoForm';

const detalleCandidatoMain = () => {
  return (
    <div className="main col-8 pe-0">
      <div className="info">
        <img src="/images/profile-img.jpeg" alt="imagen de perfil" />
        <div className="profile row">
          <div className="profile-location col-auto">
            <h1>Nombre Alumno</h1>
            <div>
              <IoLocationOutline />
              <p>Valencia, España</p>
            </div>
            <div>
              <MdMyLocation />
              <p>En remoto, Sin traslado</p>
            </div>
          </div>
          <div className="profile-status col-auto">
            <p>Estado del candidato:</p>
            <span className="contratado">Contratado</span>
          </div>
        </div>
      </div>
      <CandidatoInfoForm />
    </div>
  );
};

export default detalleCandidatoMain;
