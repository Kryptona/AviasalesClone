import {Ticket} from "./Ticket";

export interface TicketsResponse{
    tickets: Ticket[];
    stop: boolean;
}
