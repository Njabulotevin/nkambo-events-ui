"use client"

import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useRouter } from "next/navigation"

// Mock data for the events
const events = [
  {
    id: 1,
    name: "Summer Music Festival",
    location: "Central Park",
    start_date: "2024-07-15",
    start_time: "14:00",
    ticket_price: 50,
    ticket_quantity: 1000,
  },
  {
    id: 2,
    name: "Tech Conference 2024",
    location: "Convention Center",
    start_date: "2024-09-22",
    start_time: "09:00",
    ticket_price: 299,
    ticket_quantity: 500,
  },
  {
    id: 3,
    name: "Food and Wine Expo",
    location: "City Hall",
    start_date: "2024-10-05",
    start_time: "11:00",
    ticket_price: 75,
    ticket_quantity: 750,
  },
  {
    id: 4,
    name: "New Year's Eve Gala",
    location: "Grand Hotel",
    start_date: "2024-12-31",
    start_time: "20:00",
    ticket_price: 150,
    ticket_quantity: 300,
  },
]

export default function EventTable() {

    const route = useRouter();

  return (
    <div className="min-h-screen bg-[#0A0B2E] flex items-center justify-center p-4">
      <div className="w-full max-w-4xl space-y-8 p-6 bg-white rounded-lg shadow-xl">
        <div className="space-y-2">
          <h1 className="text-2xl font-bold tracking-tight text-center">Event List</h1>
          <p className="text-sm text-muted-foreground text-center">Manage your events</p>
        </div>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[250px]">Event Name</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Time</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Tickets</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {events.map((event) => (
                <TableRow key={event.id}>
                  <TableCell className="font-medium">{event.name}</TableCell>
                  <TableCell>{event.location}</TableCell>
                  <TableCell>{event.start_date}</TableCell>
                  <TableCell>{event.start_time}</TableCell>
                  <TableCell>${event.ticket_price}</TableCell>
                  <TableCell>{event.ticket_quantity}</TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="outline"
                      className="mr-2 border-[#E31B54] text-[#E31B54] hover:bg-[#E31B54] hover:text-white"
                      onClick={()=>route.push("/dashboard/event/123456")}
                    >
                      View
                    </Button>
                    {/* <Button
                      variant="outline"
                      className="border-[#E31B54] text-[#E31B54] hover:bg-[#E31B54] hover:text-white"
                    >
                      Delete
                    </Button> */}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="flex justify-end">
          <Button onClick={()=>route.push("/dashboard/event/create")} className="bg-[#E31B54] hover:bg-[#E31B54]/90">Add New Event</Button>
        </div>
      </div>
    </div>
  )
}

