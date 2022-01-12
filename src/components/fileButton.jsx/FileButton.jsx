import React from 'react';
import { BiCloudUpload } from 'react-icons/bi';
import Button from '../button/Button';

/** Style  */
import './fileButton.scss';

const FileButton = () => {
  return (
    <div className="file-button">
      <Button
        label="Subir documento PDF"
        color="secondary"
      >
        <BiCloudUpload />
      </Button>
      <input type="file" id="cv-upload" />
    </div>
  );
};

export default FileButton;
