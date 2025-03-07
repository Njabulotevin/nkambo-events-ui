"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarIcon, ClockIcon, MapPinIcon, TicketIcon } from "lucide-react"
import useEventList from "./dashboard/useEventList"
import { Event } from "@/app/models/events";



export default function EventListPage() {

  const {data} = useEventList()

  return (
    <div className="flex items-center justify-center p-4">
      <div className="w-full max-w-6xl space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight text-center text-white">Upcoming Events</h1>
          <p className="text-lg text-center text-white/80">Discover and book amazing events</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data?.map((event : Event) => (
            <Card key={event._id} className="flex flex-col overflow-hidden">
              <img src={event.cover_url || "/placeholder.svg"} alt={event.name} className="w-full h-48 object-cover" />
              <CardHeader>
                <CardTitle>{event.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-gray-600 mb-4">{event.description}</p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <CalendarIcon className="w-4 h-4 mr-2 text-[#E31B54]" />
                    <span>{event.start_date}</span>
                  </div>
                  <div className="flex items-center">
                    <ClockIcon className="w-4 h-4 mr-2 text-[#E31B54]" />
                    <span>{event.start_time}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPinIcon className="w-4 h-4 mr-2 text-[#E31B54]" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center">
                    <TicketIcon className="w-4 h-4 mr-2 text-[#E31B54]" />
                    <span>${event.ticket_price}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <Button
                  asChild
                  variant="outline"
                  className="border-[#E31B54] text-[#E31B54] hover:bg-[#E31B54] hover:text-white"
                >
                  <Link href={`/event/${event._id}`}>View Details</Link>
                </Button>
                <Button className="bg-[#E31B54] hover:bg-[#E31B54]/90">Buy Ticket</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="flex justify-center space-x-4">
        
          <Button className="bg-[#E31B54] hover:bg-[#E31B54]/90">View All Events</Button>
        </div>
      </div>
    </div>
  )
}

