"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import useCreateEvent from "./useCreateEvent"

export default function EventForm() {
  const {values, handleSubmit, handleChange} = useCreateEvent();

  return (
    <div className="min-h-screen bg-[#0A0B2E] flex items-center justify-center p-4">
      <div className="w-full max-w-2xl space-y-8 p-6 bg-white rounded-lg shadow-xl">
        <div className="space-y-2 text-center">
          <h1 className="text-2xl font-bold tracking-tight">Create Event</h1>
          <p className="text-sm text-muted-foreground">Fill in the details for your new event</p>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <Label htmlFor="name">Event Name</Label>
            <Input value={values.name} onChange={handleChange} id="name" placeholder="Enter event name" className="border-[#E31B54] focus-visible:ring-[#E31B54]" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="Enter event description"
              className="border-[#E31B54] focus-visible:ring-[#E31B54]"
              value={values.description} onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="location">Location</Label>
            <Input
              id="location"
              placeholder="Enter event location"
              className="border-[#E31B54] focus-visible:ring-[#E31B54]"
              value={values.location} onChange={handleChange}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="start_date">Start Date</Label>
              <Input id="start_date" type="date" className="border-[#E31B54] focus-visible:ring-[#E31B54]" value={values.start_date} onChange={handleChange} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="end_date">End Date</Label>
              <Input id="end_date" type="date" className="border-[#E31B54] focus-visible:ring-[#E31B54]" value={values.end_date} onChange={handleChange}/>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="start_time">Start Time</Label>
              <Input id="start_time" type="time" className="border-[#E31B54] focus-visible:ring-[#E31B54]" value={values.start_time} onChange={handleChange}/>
            </div>
            <div className="space-y-2">
              <Label htmlFor="end_time">End Time</Label>
              <Input id="end_time" type="time" className="border-[#E31B54] focus-visible:ring-[#E31B54]" value={values.end_time} onChange={handleChange}/>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="ticket_price">Ticket Price</Label>
              <Input
                id="ticket_price"
                type="number"
                placeholder="Enter ticket price"
                className="border-[#E31B54] focus-visible:ring-[#E31B54]"
                value={values.ticket_price} onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="ticket_quantity">Ticket Quantity</Label>
              <Input
                id="ticket_quantity"
                type="number"
                placeholder="Enter ticket quantity"
                className="border-[#E31B54] focus-visible:ring-[#E31B54]"
                value={values.ticket_quantity} onChange={handleChange}
              />
            </div>
          </div>
          <Button type="submit" className="w-full bg-[#E31B54] hover:bg-[#E31B54]/90">
            Create Event
          </Button>
        </form>
      </div>
    </div>
  )
}

