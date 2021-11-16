import React from 'react';
import styles from './Main.scss';
import Card from './Card/Card';
import aviasales_logo from '../img/aviasales_logo.svg';
import SortedCheckbox from './SortedCheckbox/SortedCheckbox';

const Main = () => {
  return (
    <div className={styles.root}>
      <img src={aviasales_logo} />
      <div className={styles.content}>
        <SortedCheckbox />
        <Card />
      </div>
    </div>
  );
};

export default Main;
