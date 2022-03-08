import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './spinner.module.scss';

function Spinner({ className }) {
  return (
    <div className={clsx(styles.spinner, className)}>
      <div />
      <div />
    </div>
  );
}

Spinner.propTypes = {
  className: PropTypes.string,
};

export default Spinner;
