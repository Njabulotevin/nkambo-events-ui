import { NewTicket } from "./tickets"

export interface Response<T> {
    data: T,
    status: number
}

export interface BuyTicket {
    ticket_id: string,
    body: NewTicket
}