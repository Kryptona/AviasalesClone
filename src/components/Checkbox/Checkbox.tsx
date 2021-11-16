import React from 'react';
import styles from './Checkbox.scss';

interface Props {
  text: string;
}

const Checkbox: React.FC<Props> = ({text}) => {
  return (
    <div className={styles.root}>
      <input className={styles.checkbox} type="checkbox" />
      <span className={styles.text}>{text}</span>
    </div>
  );
};

export default Checkbox;
