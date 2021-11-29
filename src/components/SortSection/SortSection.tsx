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

    return (
        <div className={styles.root}>
            <button className={cn(styles.left, {[styles.focus]: value === SortType.lowCost})}
                    onClick={lowCost}>
                Самый дешевый
            </button>
            <button
                className={cn(styles.right, {[styles.focus]: value === SortType.fastest})}
                onClick={fastest}>
                Самый быстрый
            </button>
        </div>
    );
};

export default SortSection;
