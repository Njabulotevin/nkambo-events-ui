"use client"

import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/card"
import { CheckCircle, XCircle, CalendarIcon, ClockIcon, MapPinIcon, TicketIcon } from "lucide-react"
import Link from "next/link"
import { useEventById } from "../../event/[id]/useGetEventById"
import { useParams } from "next/navigation"
import useSWR from "swr"
import { apiFetcherClient } from "@/services/api"
import { Ticket } from "@/models/tickets"



export default function TicketListPage() {
  const params = useParams<{event_id:string}>();

  const event = useEventById(params.event_id)

  const {data} = useSWR<Ticket[]>("/ticket/event/"+params.event_id, apiFetcherClient);




  return (
    <div className="min-h-screen flex flex-col p-4">
      <div className="w-full space-y-8 bg-white rounded-lg border border-gray-100 p-6">
        {/* Event Details Section */}
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <img
            src={event?.data?.cover_url || ""}
            alt={event?.data?.name}
            className="w-full md:w-1/3 h-48 object-cover rounded-lg"
          />
          <div className="flex-grow">
            <h1 className="text-2xl font-bold mb-2">{event.data?.name}</h1>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center">
                <CalendarIcon className="w-4 h-4 mr-2 text-[#E31B54]" />
                <span>{event.data?.start_date}</span>
              </div>
              <div className="flex items-center">
                <ClockIcon className="w-4 h-4 mr-2 text-[#E31B54]" />
                <span>{event.data?.start_time}</span>
              </div>
              <div className="flex items-center">
                <MapPinIcon className="w-4 h-4 mr-2 text-[#E31B54]" />
                <span>{event.data?.location}</span>
              </div>
              <div className="flex items-center">
                <TicketIcon className="w-4 h-4 mr-2 text-[#E31B54]" />
                <span>R{event.data?.ticket_price}</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <Button asChild className="bg-[#E31B54] hover:bg-[#E31B54]/90 text-white">
              <Link href="/dashboard">Back to Events</Link>
            </Button>
            <Button asChild className="bg-green-600 hover:bg-green-700 text-white">
              <Link href={`/dashboard/tickets/${params.event_id}/redeem`}>Redeem Ticket</Link>
            </Button>
          </div>
        </div>

        {/* Ticket List Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Tickets</h2>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Ticket Number</TableHead>
                  <TableHead>Attendee Name</TableHead>
                  <TableHead>Attendee Email</TableHead>
                  <TableHead>Redeemed</TableHead>
                  <TableHead>Payment Made</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data?.map((ticket: Ticket) => (
                  <TableRow key={ticket.ticket_number}>
                    <TableCell>{ticket.ticket_number}</TableCell>
                    <TableCell>{ticket.attendee_name}</TableCell>
                    <TableCell>{ticket.attendee_email}</TableCell>
                    <TableCell>
                      {ticket.is_redeemed ? (
                        <CheckCircle className="text-green-500" />
                      ) : (
                        <XCircle className="text-red-500" />
                      )}
                    </TableCell>
                    <TableCell>
                      {ticket.payment_id ? (
                        <CheckCircle className="text-green-500" />
                      ) : (
                        <XCircle className="text-red-500" />
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  )
}

