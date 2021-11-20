import React from 'react';
import styles from './Card.scss';
import {ticketApi} from '../../api/ticketApi';
import {Ticket} from '../../domain/Ticket';

interface Props {
  ticket: Ticket;
}

const Card: React.FC<Props> = ({ticket}) => {
  ticketApi.getTicket();

  const getTimeByHours = (minutes: number) => {
    const hours = Math.trunc(minutes / 60);
    const min = minutes % 60;
    return `${hours}ч ${min}м`;
  };

  const stopsCounter = (stops: string[]) => {
    const stopsCount = stops.length;
    switch (stopsCount) {
      case 0:
        return `Без пересадок`;
      case 1:
        return `${stopsCount} пересадка`;
      default:
        return `${stopsCount} пересадки`;
    }
  };

  const getStopsName = (stops: string[]) => {
    return stops.length ? stops.join(', ') : 'Прямой';
  };

  return (
    <div className={styles.root}>
      <div className={styles.title}>
        <div className={styles.price}>{ticket.price} ₽</div>
        <img className={styles.logo} src={`https://pics.avs.io/99/36/${ticket.carrier}.png`} />
      </div>
      {ticket.segments.map((segment) => (
        <div className={styles.content}>
          {renderSection(`${segment.origin} - ${segment.destination}`, '10:45 - 08:00')}
          {renderSection('в пути', `${getTimeByHours(segment.duration)}`)}
          {renderSection(stopsCounter(segment.stops), getStopsName(segment.stops))}
        </div>
      ))}
    </div>
  );
};

export default Card;

const renderSection = (title: string, info: string) => {
  return (
    <div className={styles.renderSection}>
      <div className={styles.title}>{title}</div>
      <div className={styles.info}>{info}</div>
    </div>
  );
};
