import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from './../../assets/crown.svg';
import styles from './Header.module.scss';
import { auth } from '../../firebase/utils';

function Header({ currentUser }) {
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
        {currentUser ? (
          <div className={styles.link} onClick={() => auth.signOut()}>
            sign out
          </div>
        ) : (
          <Link to='/signin' className={styles.link}>
            sign in
          </Link>
        )}
      </div>
    </div>
  );
}

export default Header;
