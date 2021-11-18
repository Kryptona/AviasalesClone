import React from 'react';
import styles from './Main.scss';
import Card from './Card/Card';
import aviasales_logo from '../img/aviasales_logo.svg';
import SortedCheckbox from './SortedCheckbox/SortedCheckbox';
import ButtonsSections from './ButtonsSection/ButtonsSections';

const Main = () => {
  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <img src={aviasales_logo} />
      </div>
      <div className={styles.content}>
        <div className={styles.sorted_card}>
          <SortedCheckbox />
        </div>
        <ButtonsSections />
        <div className={styles.card}>
          <Card />
        </div>
      </div>
      <div className={styles.footer}></div>
    </div>
  );
};

export default Main;
