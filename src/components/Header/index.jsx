import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from './../../assets/crown.svg';
import styles from './Header.module.scss';

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link to='/'>
          <Logo />
        </Link>
      </div>
      <div className={styles.links}>
        <Link to='/shop' className={styles.link}>
          shop
        </Link>
        <Link to='/contacts' className={styles.link}>
          contacts
        </Link>
      </div>
    </div>
  );
}

export default Header;
