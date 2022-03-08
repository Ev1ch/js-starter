import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './textarea.module.scss';

function Textarea({ value, onChange, className }) {
  function onChangeHandler(event) {
    onChange(event);
  }

  return (
    <textarea className={clsx(styles.button, className)} onChange={onChangeHandler} value={value} />
  );
}

Textarea.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string,
};

export default Textarea;
