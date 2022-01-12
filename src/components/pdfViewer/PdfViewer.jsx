import React from 'react';
import pdfFile from '../../../public/uploads/cv_prueba.pdf';
/** Style */
import './pdfViewer.scss';

const PdfViewer = () => {
  return (
    <div className="curriculum">
      <object id="pdf-viewer" data={pdfFile} type="application/pdf" aria-label="Lector de pdf" className="pdf-viewer" />
    </div>
  );
};

export default PdfViewer;
