import React from 'react';
import PropTypes from 'prop-types';

const TagsList = ({ data }) => {
  return (
    <>
      <span key={0}>{data[0]}</span>
      <span key={1}>{data[1]}</span>
      {data.length >= 3 ? (
        <span key={2} className="num">
          +
          {data.length - 2}
        </span>
      ) : null}
    </>
  );
};

TagsList.propTypes = {
  data: PropTypes.array.isRequired,
};

export default TagsList;
