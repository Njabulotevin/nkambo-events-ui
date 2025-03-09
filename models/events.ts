export interface Event {
    _id:string;
    name: string;
    description: string;
    location: string;
    start_date: string; 
    end_date: string;
    start_time: string;
    end_time: string;
    ticket_price: number;
    ticket_quantity: number;
    cover_url: string;
}
