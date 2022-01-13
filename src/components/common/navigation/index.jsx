import React from 'react';
import { Link } from 'react-router-dom';
import styles from './navigation.module.scss';

function Navigation() {
  return (
    <nav className={styles.navigation}>
      <Link to="/">Link</Link>
    </nav>
  );
}

export default Navigation;
