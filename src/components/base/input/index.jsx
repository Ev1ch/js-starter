import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './input.module.scss';

function Input({ value, onChange, className }) {
  function onChangeHandler(event) {
    onChange(event);
  }

  return (
    <input className={clsx(styles.button, className)} onChange={onChangeHandler} value={value} />
  );
}

Input.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string,
};

export default Input;
