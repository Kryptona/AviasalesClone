import {Ticket} from '../domain/Ticket';
import axios, {AxiosResponse} from 'axios';
import {SearchResponse} from '../domain/SearchResponse';
import {TicketsResponse} from "../domain/TicketsResponse";

function getTickets(): Promise<Ticket[]> {
  return axios
    .get('https://front-test.beta.aviasales.ru/search')
    .then((id: AxiosResponse<SearchResponse>) => id.data.searchId)
    .then((id) => axios.get(`https://front-test.beta.aviasales.ru/tickets?searchId=${id}`))
    .then((tickets: AxiosResponse<TicketsResponse>) => tickets.data.tickets);
    // .then((tickets: AxiosResponse<TicketsResponse>) => tickets.data.tickets.slice(0, 20));
}

export const ticketApi = {
  getTicket: getTickets,
} as const;
