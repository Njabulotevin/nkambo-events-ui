import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarIcon, ClockIcon, MapPinIcon, TicketIcon } from "lucide-react"
import Link from "next/link"

// Mock data for the events
const events = [
  {
    id: 1,
    name: "Summer Music Festival",
    description: "A day of music featuring top artists from around the world.",
    location: "Central Park, New York City",
    start_date: "2024-07-15",
    start_time: "14:00",
    ticket_price: 50,
    ticket_quantity: 1000,
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 2,
    name: "Tech Conference 2024",
    description: "Explore the latest in technology and innovation.",
    location: "Convention Center, San Francisco",
    start_date: "2024-09-22",
    start_time: "09:00",
    ticket_price: 299,
    ticket_quantity: 500,
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 3,
    name: "Food and Wine Expo",
    description: "Taste exquisite cuisines and fine wines from around the globe.",
    location: "City Hall, Chicago",
    start_date: "2024-10-05",
    start_time: "11:00",
    ticket_price: 75,
    ticket_quantity: 750,
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 4,
    name: "New Year's Eve Gala",
    description: "Ring in the new year with style and elegance.",
    location: "Grand Hotel, Las Vegas",
    start_date: "2024-12-31",
    start_time: "20:00",
    ticket_price: 150,
    ticket_quantity: 300,
    image: "/placeholder.svg?height=200&width=400",
  },
]

export default function EventCardList() {
  return (
    <div className="min-h-screen bg-[#0A0B2E] flex items-center justify-center p-4">
      <div className="w-full max-w-6xl space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight text-center text-white">Upcoming Events</h1>
          <p className="text-lg text-center text-white/80">Discover and book amazing events</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <Card key={event.id} className="flex flex-col overflow-hidden">
              <img src={event.image || "/placeholder.svg"} alt={event.name} className="w-full h-48 object-cover" />
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
                  <Link href={`/events/${event.id}`}>View Details</Link>
                </Button>
                <Button className="bg-[#E31B54] hover:bg-[#E31B54]/90">Book Now</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="flex justify-center">
          <Button className="bg-[#E31B54] hover:bg-[#E31B54]/90">View All Events</Button>
        </div>
      </div>
    </div>
  )
}

