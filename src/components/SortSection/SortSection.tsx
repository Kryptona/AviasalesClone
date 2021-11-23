import React from 'react';
import cn from 'classnames';
import styles from './SortSection.scss';
import {SortType} from '../../domain/SortType';

interface Props {
    value: SortType;
    onChangeValue: (value: SortType) => void;
    onLowCost: () => void;
    onFastest: () => void;
}

const SortSection: React.FC<Props> = ({value, onChangeValue, onLowCost, onFastest}) => {

    const lowCost = () => {
        onChangeValue(SortType.lowCost);
        onLowCost();
    }
    const fastest = () => {
        onChangeValue(SortType.fastest);
        onFastest();
    }
    const optimal = () => {
        onChangeValue(SortType.optimal)
    }

    return (
        <div className={styles.root}>
            <button className={cn(styles.left, {[styles.focus]: value === SortType.lowCost})}
                    onClick={lowCost}>
                Самый дешевый
            </button>
            <button
                className={cn(styles.middle, {[styles.focus]: value === SortType.fastest})}
                onClick={fastest}>
                Самый быстрый
            </button>
            <button
                className={cn(styles.right, {[styles.focus]: value === SortType.optimal})}
                onClick={optimal}>
                Оптимальный
            </button>
        </div>
    );
};

export default SortSection;
