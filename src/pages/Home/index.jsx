import React from 'react';
import Directory from '../../components/Directory';
import styles from './Home.module.scss';

function Home() {
  return (
    <div className={styles.homepage}>
      <Directory />
    </div>
  );
}

export default Home;
