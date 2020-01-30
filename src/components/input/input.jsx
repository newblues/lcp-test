import React from 'react';

import css from './input.module.scss';

const Input = ({ placeholder, onTagAdded, onChange, selectTag }) => {
  const handleChange = e => {
    onChange(e.target.value);
  };

  const handleKeyPress = e => {
    if (e.which === 13 && e.target.value) {
      onTagAdded(e.target.value);
      e.target.value = '';
    }

    if (e.which === 8 && !e.target.value) {
      selectTag();
    }
  };

  return (
    <input
      placeholder={placeholder}
      onKeyUp={handleKeyPress}
      onChange={handleChange}
    ></input>
  );
};

export default Input;
