import React from 'react';
import styles from './SortedCheckbox.scss';
import Checkbox from '../Checkbox/Checkbox';

const SortedCheckbox = () => {
  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <p className={styles.title}>КОЛИЧЕСТВО ПЕРЕСАДОК</p>
        <div className={styles.string}>
          <Checkbox text={"Все"}/>
          <Checkbox text={"Без пересадок"}/>
          <Checkbox text={"1 пересадка"}/>
          <Checkbox text={"2 пересадки"}/>
          <Checkbox text={"3 пересадки"}/>
        </div>

      </div>
    </div>
  );
};

export default SortedCheckbox;
