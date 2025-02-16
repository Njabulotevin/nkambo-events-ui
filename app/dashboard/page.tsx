"use client"

import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useRouter } from "next/navigation"
import useEventList from "./useEventList";
import { Event } from "../models/events";



export default function EventTable() {

    const route = useRouter();

    const {data, error, isLoading} = useEventList();

  if(error){
    return <div>Error</div>
  }

  if(isLoading){
    return <div>Loading...</div>
  }

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
                {data.map((event : Event) => (
                  <TableRow key={event._id}>
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
                      >
                        View
                      </Button>
                     
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

