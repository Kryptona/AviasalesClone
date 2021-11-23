import React from 'react';
import cn from 'classnames';
import styles from './SortSection.scss';
import {SortType} from '../../domain/SortType';

interface Props {
    value: SortType;
    onChangeValue: (value: SortType) => void;
}

const SortSection: React.FC<Props> = ({value, onChangeValue}) => {
    return (
        <div className={styles.root}>
            <button className={cn(styles.left, {[styles.focus]: value === SortType.lowCost})}
                    onClick={() => onChangeValue(SortType.lowCost)}>
                Самый дешевый
            </button>
            <button
                className={cn(styles.middle, {[styles.focus]: value === SortType.fastest})}
                onClick={() => onChangeValue(SortType.fastest)}>
                Самый быстрый
            </button>
            <button
                className={cn(styles.right, {[styles.focus]: value === SortType.optimal})}
                onClick={() => onChangeValue(SortType.optimal)}>
                Оптимальный
            </button>
        </div>
    );
};

export default SortSection;
