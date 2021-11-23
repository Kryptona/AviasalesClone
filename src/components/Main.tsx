import React, {useEffect, useState} from 'react';
import styles from './Main.scss';
import Card from './Card/Card';
import aviasales_logo from '../img/aviasales_logo.svg';
import SortedCheckbox from './SortedCheckbox/SortedCheckbox';
import SortSection from './SortSection/SortSection';
import {ticketApi} from '../api/ticketApi';
import {compareByDuration, Ticket} from '../domain/Ticket';
import {SortType} from '../domain/SortType';

const Main = () => {
  const [tickets, setTickets] = useState<ReadonlyArray<Ticket>>([]);
  const [allTickets, setAllTickets] = useState<ReadonlyArray<Ticket>>([]);
  const [transfers, setTransfers] = useState([]);
  const [sortValue, setSortValue] = useState(SortType.fastest);

  useEffect(() => {
    ticketApi.getTicket().then((tickets) => {
      setAllTickets(tickets);
      setTickets(tickets.sort(compareByDuration).slice(0, 20));
    });
  }, []);

  const filterTickets = () => {};

  const sortTickets = () => {};

  const onSortByLowCost = () => {};
  const onSortByFaster = () => {
    const fastTickets = [...allTickets].sort(compareByDuration);
    console.log(fastTickets);
    setTickets(fastTickets.slice(0, 20));
  };

  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <img src={aviasales_logo} />
      </div>
      <div className={styles.filter_card}>
        <SortedCheckbox values={transfers} onValuesChange={setTransfers} />
      </div>
      <div className={styles.sort_section}>
        <SortSection
          value={sortValue}
          onChangeValue={setSortValue}
          onLowCost={onSortByLowCost}
          onFastest={onSortByFaster}
        />
      </div>
      <div className={styles.cards}>
        {tickets.map((ticket) => (
          <Card ticket={ticket} />
        ))}
      </div>
      <div className={styles.leftStub}></div>
      <div className={styles.rightStub}></div>
      <div className={styles.footer}></div>
    </div>
  );
};

export default Main;
