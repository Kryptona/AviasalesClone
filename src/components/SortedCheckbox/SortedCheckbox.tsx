import React from 'react';
import styles from './SortedCheckbox.scss';
import Checkbox from '../Checkbox/Checkbox';

const SortedCheckbox = () => {
  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <p>КОЛИЧЕСТВО ПЕРЕСАДОК</p>
        <Checkbox />
      </div>
    </div>
  );
};

export default SortedCheckbox;
