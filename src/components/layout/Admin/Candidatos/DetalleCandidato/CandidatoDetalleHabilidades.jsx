import React from 'react';
import tecnologias from '../../../../../data/tecnologias.json';
import idiomas from '../../../../../data/idiomas.json';
import TagSelector from '../../../../tags/TagSelector';

const CandidatoDetalleHabilidades = () => {
  return (
    <div className="candidato-habilidades row">
      <TagSelector options={tecnologias} />
      <TagSelector options={idiomas} />
    </div>
  );
};

export default CandidatoDetalleHabilidades;
