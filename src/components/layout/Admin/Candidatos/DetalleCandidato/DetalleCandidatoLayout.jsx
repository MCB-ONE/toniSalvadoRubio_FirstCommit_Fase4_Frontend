import React from 'react';
import Breadcrumbs from '../../../../breadcrumbs/Breadcrumbs';
/* Styles */
import './detalleCandidato.scss';
import DetalleCandidatoMain from './DetalleCandidatoMain';
import DetalleCandidatoSidebar from './DetalleCandidatoSidebar';

const DetalleCandidatoLayout = () => {
  return (
    <div className="detalle-candidato ">
      <Breadcrumbs />
      <div className="layout">
        <DetalleCandidatoMain />
        <DetalleCandidatoSidebar />
      </div>
    </div>
  );
};

export default DetalleCandidatoLayout;
