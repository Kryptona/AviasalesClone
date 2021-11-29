import React from 'react';
import styles from './SortedCheckbox.scss';
import Checkbox from '../Checkbox/Checkbox';
import {TransferType} from '../../domain/TransferType';

interface Props {
  values: TransferType[];
  onValuesChange: (values: TransferType[]) => void;
}

const SortedCheckbox: React.FC<Props> = ({values, onValuesChange}) => {
  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <p className={styles.title}>КОЛИЧЕСТВО ПЕРЕСАДОК</p>
        <div className={styles.string}>
          <Checkbox
            text={'Все'}
            value={values.length == 4}
            onValueChange={(checked) => {
              if (checked)
                onValuesChange([
                  TransferType.direct,
                  TransferType.transfer1,
                  TransferType.transfer2,
                  TransferType.transfer3,
                ]);
              else onValuesChange([]);
            }}
          />
          <Checkbox
            text={'Без пересадок'}
            value={values.includes(TransferType.direct)}
            onValueChange={(checked) => {
              if (checked) onValuesChange([...values, TransferType.direct]);
              else{
                onValuesChange(values.filter(value => value !== TransferType.direct))
              }
            }}
          />
          <Checkbox
            text={'1 пересадка'}
            value={values.includes(TransferType.transfer1)}
            onValueChange={(checked) => {
              if (checked) onValuesChange([...values, TransferType.transfer1]);
              else{
                onValuesChange(values.filter(value => value !== TransferType.transfer1))
              }
            }}
          />
          <Checkbox
            text={'2 пересадки'}
            value={values.includes(TransferType.transfer2)}
            onValueChange={(checked) => {
              if (checked) onValuesChange([...values, TransferType.transfer2]);
              else{
                onValuesChange(values.filter(value => value !== TransferType.transfer2))
              }
            }}
          />
          <Checkbox
            text={'3 пересадки'}
            value={values.includes(TransferType.transfer3)}
            onValueChange={(checked) => {
              if (checked) onValuesChange([...values, TransferType.transfer3]);
              else{
                onValuesChange(values.filter(value => value !== TransferType.transfer3))
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SortedCheckbox;
