import React from 'react';
import styles from './Card.scss';
import logo from '../../img/S7 Logo.png';

const Card = () => {


  return (
    <div className={styles.root}>
      <div className={styles.title}>
        <div className={styles.price}>13 400 P</div>
        <img className={styles.logo} src={logo} />
      </div>
      <div className={styles.content}>
        {renderSection('mow - hkt', '10:45 - 08:00')}
        {renderSection('в пути', '21ч 15м')}
        {renderSection('2 пересадки', 'HKG, JNB')}
      </div>
    </div>
  );
};

export default Card;

const renderSection = (title: string, info: string) => {
  return (
      <div className={styles.renderSection}>
        <div className={styles.title}>{title}</div>
        <div className={styles.info}>{info}</div>
      </div>
  );
};
