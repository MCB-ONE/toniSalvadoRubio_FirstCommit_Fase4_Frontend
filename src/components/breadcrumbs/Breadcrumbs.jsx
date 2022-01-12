import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';

const Breadcrumbs = () => {
  return (
    <div className="breadcrums">
      <span>
        Candidatos
        <IoIosArrowBack />
      </span>
      <span>Nombre Apellido</span>
    </div>
  );
};

export default Breadcrumbs;
