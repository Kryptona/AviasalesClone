import React from 'react';
import styles from './Main.scss';
import Card from './Card/Card';
import aviasales_logo from '../img/aviasales_logo.svg';
import SortedCheckbox from './SortedCheckbox/SortedCheckbox';
import SortSection from './SortSection/SortSection';

const Main = () => {
  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <img src={aviasales_logo} />
      </div>
      <div className={styles.filter_card}>
        <SortedCheckbox />
      </div>
      <div className={styles.sort_section}>
        <SortSection />
      </div>
      <div className={styles.cards}>
        <Card />
      </div>
      <div className={styles.leftStub}></div>
      <div className={styles.rightStub}></div>
      <div className={styles.footer}></div>
    </div>
  );
};

export default Main;
