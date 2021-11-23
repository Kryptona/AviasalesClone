import React from 'react';
import styles from "./SortSection.scss";

interface Props{
    onSortByLowCost: () => void;
    onSortByFaster: () => void;

}

const SortSection: React.FC<Props> = ({onSortByLowCost, onSortByFaster}) => {
    return (
        <div className={styles.root}>
            <button className={styles.left} onClick={onSortByLowCost}>Самый дешевый</button>
            <button className={styles.middle} onClick={onSortByFaster}>Самый быстрый</button>
            <button className={styles.right}>Оптимальный</button>
        </div>
    );
};

export default SortSection;
