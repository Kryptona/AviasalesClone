import {Ticket} from '../domain/Ticket';
import axios, {AxiosResponse} from 'axios';
import {SearchResponse} from '../domain/SearchResponse';
import {TicketsResponse} from '../domain/TicketsResponse';
import axiosRetry from "axios-retry";

function getTickets(): Promise<Ticket[]> {
  return (
    axios
      .get('https://front-test.beta.aviasales.ru/search', {'axios-retry': {retries: 1}})
      .then((id: AxiosResponse<SearchResponse>) => id.data.searchId)
      .then((id) => axios.get(`https://front-test.beta.aviasales.ru/tickets?searchId=${id}`))
      .then((tickets: AxiosResponse<TicketsResponse>) => tickets.data.tickets)
  );
}

export const ticketApi = {
  getTicket: getTickets,
} as const;
