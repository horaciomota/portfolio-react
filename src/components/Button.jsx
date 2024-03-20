/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
import React from 'react';
import '../styles/button_styles/button.modules.scss';

function Button({
  text, onClick, className, style,
}) {
  return (
    <button
      className={`button ${className}`}
      onClick={onClick}
      style={style}
    >
      {text}
    </button>
  );
}

export default Button;
