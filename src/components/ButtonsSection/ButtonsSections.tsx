import React from 'react';
import styles from "./ButtonsSections.scss";

const ButtonsSections = () => {
    return (
        <div className={styles.root}>
            <button className={styles.left}>Самый дешевый</button>
            <button className={styles.middle}>Самый быстрый</button>
            <button className={styles.right}>Оптимальный</button>
        </div>
    );
};

export default ButtonsSections;
