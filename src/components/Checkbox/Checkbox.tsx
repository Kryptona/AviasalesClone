import React from 'react';
import styles from "./Checkbox.scss";

const Checkbox = () => {
    return (
        <div className={styles.root}>
                <input className={styles.checkbox} type="checkbox"/>
        </div>
    );
};

export default Checkbox;
