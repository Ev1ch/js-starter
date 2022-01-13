import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './button.module.scss';

function Button({ text, onClick, className }) {
  function onClickHandler(event) {
    onClick(event);
  }

  return (
    <button className={clsx(styles.button, className)} onClick={onClickHandler}>
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default Button;
