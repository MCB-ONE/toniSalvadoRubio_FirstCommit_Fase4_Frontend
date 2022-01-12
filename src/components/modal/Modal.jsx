import React from 'react';
import { IoClose } from 'react-icons/io5';
import PropTypes from 'prop-types';
import CandidatoCreateForm from '../forms/CandidatoCreateForm';

/* Modal styles */
import './modal.scss';
import Button from '../button/Button';

const Modal = ({ state, changeState }) => {
  return (
    <>
      {state && (
        <div className="overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h3>Nuevo candidato</h3>
              <IoClose className="modal-close" onClick={() => changeState(false)} />
            </div>
            <div className="modal-main">
              <CandidatoCreateForm />
            </div>
            <div className="modal-footer">
              <Button label="Guardar" color="light" onClick={() => changeState(false)} />
              <Button label="Cancelar" color="secondary" onClick={() => changeState(false)} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

Modal.propTypes = {
  state: PropTypes.bool.isRequired,
  changeState: PropTypes.func.isRequired,
};

export default Modal;
