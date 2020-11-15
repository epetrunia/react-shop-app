import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import styles from './Header.module.scss';
import { ReactComponent as Logo } from './../../assets/crown.svg';
import { auth } from '../../firebase/utils';
import CartIcon from './../CartIcon';
import CartDropdown from './../CartDropdown';

function Header({ currentUser, hidden }) {
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
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
}

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden,
});

export default connect(mapStateToProps)(Header);
