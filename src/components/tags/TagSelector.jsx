import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { CgClose } from 'react-icons/cg';
import Select from 'react-select';

const TagSelector = ({ options }) => {
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
    <div className="col-12 mb-3 tag-selector">
      <label htmlFor="etiquetas" className="form-label">Tecnologías</label>
      <Select className="form-control" placeholder="Escribe para buscar...." name="etiquetas" isMulti options={options} value={selectedTags} onChange={handleTagsChange} classNamePrefix="tag-select" />
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
  );
};

TagSelector.propTypes = {
  options: PropTypes.array.isRequired,
};

export default TagSelector;
