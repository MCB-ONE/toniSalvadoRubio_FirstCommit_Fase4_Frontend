/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

/** Styles */
import './button.scss';

const Button = ({
  variant,
  color,
  label,
  type,
  onClick,
  children,
}) => {
  const buttonStyle = `button ${variant}-${color}`;
  return (
    <button type={type === 'button' ? 'button' : 'submit'} className={buttonStyle} onClick={onClick}>
      {children}
      {label}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(['default', 'outline']),
  color: PropTypes.oneOf(['primary', 'secondary', 'light']),
  label: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  children: PropTypes.object,
};

Button.defaultProps = {
  variant: 'default',
  color: 'primary',
  label: 'text',
  onClick: null,
  type: 'button',
  children: null,
};

export default Button;
