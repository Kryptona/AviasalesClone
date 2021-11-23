import React, {useEffect, useState} from 'react';
import styles from './Main.scss';
import Card from './Card/Card';
import aviasales_logo from '../img/aviasales_logo.svg';
import SortedCheckbox from './SortedCheckbox/SortedCheckbox';
import SortSection from './SortSection/SortSection';
import {ticketApi} from '../api/ticketApi';
import {Ticket} from '../domain/Ticket';

const Main = () => {
  const [tickets, setTickets] = useState<ReadonlyArray<Ticket>>([]);
  const [allTickets, setAllTickets] = useState<ReadonlyArray<Ticket>>([]);
  const [transfers, setTransfers] = useState([]);

  console.log(tickets);
  useEffect(() => {
    ticketApi.getTicket().then((tickets) => {
      setAllTickets(tickets);
    });
  }, []);

  const filterTickets = () => {};

  const sortTickets = () => {};

  const onSortByLowCost = () => {

  };
  const onSortByFaster = () => {};

  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <img src={aviasales_logo} />
      </div>
      <div className={styles.filter_card}>
        <SortedCheckbox values={transfers} onValuesChange={setTransfers}/>
      </div>
      <div className={styles.sort_section}>
        <SortSection onSortByLowCost={onSortByLowCost} onSortByFaster={onSortByFaster}/>
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
