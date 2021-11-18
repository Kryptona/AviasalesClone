import React from 'react';
import styles from "./SortSection.scss";

const SortSection = () => {
    return (
        <div className={styles.root}>
            <button className={styles.left}>Самый дешевый</button>
            <button className={styles.middle}>Самый быстрый</button>
            <button className={styles.right}>Оптимальный</button>
        </div>
    );
};

export default SortSection;
