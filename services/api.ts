import axios, { AxiosInstance } from "axios";
import { BuyTicket } from "../models/services";

const server_url = process.env.SERVER_URL || "http://api.nkamboevents.co.za";

export const apiClient: AxiosInstance = axios.create({
  baseURL: server_url,
  // baseURL: 'https://nkambo-events.onrender.com',
  timeout: 5000,
  withCredentials: true, // Enables sending cookies and credentials
  headers: {
    "Content-Type": "application/json",
  },
});

export const apiFetcherClient = (url: string) =>
  fetch(server_url + url, { credentials: "include" })
    .then((res) => res.json())
    .then((data) => data.data);

export const apiBuyTicket = async (buyTicketData: BuyTicket) =>
  await apiClient.post(
    "/ticket/buy/" + buyTicketData.ticket_id,
    buyTicketData.body
  );

export const apiRedeemTicket = async (ticketNumber: string) =>
  await apiClient.get("/ticket/redeem/" + ticketNumber);
