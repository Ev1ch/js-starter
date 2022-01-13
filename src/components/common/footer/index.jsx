import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './footer.module.scss';

function Footer({ className }) {
  return <footer className={clsx(styles.footer, className)}></footer>;
}

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
