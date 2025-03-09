export interface NewTicket {
  attendee_name: string;
  attendee_email: string;
}

export interface Ticket {
  _id: string;
  ticket_number: string;
  event_id: string;
  attendee_name: string;
  attendee_email: string;
  is_redeemed: boolean;
  payment_id: string;
}
