import React from 'react';
import styles from './Checkbox.scss';

interface Props {
  text: string;
  value: boolean;
  onValueChange: (value: boolean) => void;
}

const Checkbox: React.FC<Props> = ({text, value, onValueChange}) => {
  return (
    <div className={styles.root}>
      <input className={styles.checkbox} type="checkbox" checked={value} onClick={() => onValueChange(!value)} />
      <span className={styles.text}>{text}</span>
    </div>
  );
};

export default Checkbox;
