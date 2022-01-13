import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './base.module.scss';

function Modal({ className, children }) {
  return (
    <div className={clsx(styles.modal, className)}>
      <div className={styles.modal__content}>{children}</div>
    </div>
  );
}

Modal.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Modal;
