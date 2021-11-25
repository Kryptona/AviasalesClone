import React, {useEffect, useState} from 'react';
import styles from './Main.scss';
import Card from './Card/Card';
import aviasales_logo from '../img/aviasales_logo.svg';
import SortedCheckbox from './SortedCheckbox/SortedCheckbox';
import SortSection from './SortSection/SortSection';
import {ticketApi} from '../api/ticketApi';
import {compareByDuration, compareByPrice, Ticket} from '../domain/Ticket';
import {SortType} from '../domain/SortType';
import {TransferType, transferTypeValues} from '../domain/FilterSection';

const Main = () => {
  const [tickets, setTickets] = useState<ReadonlyArray<Ticket>>([]);
  const [allTickets, setAllTickets] = useState<ReadonlyArray<Ticket>>([]);
  const [transfers, setTransfers] = useState([0, 1, 2, 3]);
  const [sortValue, setSortValue] = useState(SortType.fastest);

  useEffect(() => {
    ticketApi.getTicket().then((tickets) => {
      setAllTickets(tickets);
      setTickets(tickets.sort(compareByDuration).slice(0, 20));
    });
  }, []);

  const setTransfersWrapper = (newTransfers: TransferType[]) => {
    const newTickets = allTickets.filter((ticket) => checkTicket(ticket, newTransfers));
    setTickets(newTickets.slice(0, 20));
    setTransfers(newTransfers);
  };

  const onSortByLowCost = () => {
    const lowCostTickets = [...allTickets].sort(compareByPrice);
    setTickets(lowCostTickets.slice(0, 20));
  };

  const onSortByFaster = () => {
    const fastTickets = [...allTickets].sort(compareByDuration);
    setTickets(fastTickets.slice(0, 20));
  };

  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <img src={aviasales_logo} />
      </div>
      <div className={styles.filter_card}>
        <SortedCheckbox values={transfers} onValuesChange={setTransfersWrapper} />
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

function checkTicket(ticket: Ticket, stops: TransferType[]): boolean {
  if (stops.length === transferTypeValues.length) {
    return true;
  }

  const a = ticket.segments[0].stops.length;
  const b = ticket.segments[1].stops.length;
  const max = Math.max.apply(null, stops);

  return (stops.includes(a) && b <= max) || (stops.includes(b) && a <= max);
}

export default Main;
