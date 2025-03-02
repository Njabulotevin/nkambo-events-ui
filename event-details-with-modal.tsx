"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CalendarIcon, ClockIcon, MapPinIcon, TicketIcon, UsersIcon, ImageIcon } from "lucide-react"

// Mock data for a single event
const event = {
  id: 1,
  name: "Summer Music Festival 2024",
  description:
    "Join us for an unforgettable day of music featuring top artists from around the world. Experience a diverse range of genres, from rock and pop to electronic and indie, all in the beautiful setting of Central Park.",
  location: "Central Park, New York City",
  start_date: "2024-07-15",
  end_date: "2024-07-15",
  start_time: "14:00",
  end_time: "23:00",
  ticket_price: 50,
  ticket_quantity: 1000,
  cover_image: "/placeholder.svg?height=400&width=800",
}

export default function EventDetailsWithModal() {
  const [coverImage, setCoverImage] = useState(event.cover_image)

  const handleImageUpload = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const file = formData.get("cover_image") as File

    if (file) {
      // In a real application, you would upload the file to your server or a cloud storage service here.
      // For this example, we'll just create a local URL for the selected file.
      const imageUrl = URL.createObjectURL(file)
      setCoverImage(imageUrl)
    }
  }

  return (
    <div className="min-h-screen bg-[#0A0B2E] flex items-center justify-center p-4">
      <div className="w-full max-w-4xl space-y-8 bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="relative h-64 sm:h-80 md:h-96">
          <img
            src={coverImage || "/placeholder.svg"}
            alt={event.name}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end">
            <div className="p-6 flex justify-between items-end w-full">
              <div>
                <h1 className="text-3xl font-bold text-white mb-2">{event.name}</h1>
                <p className="text-white text-opacity-80">{event.start_date}</p>
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="bg-white text-[#E31B54] hover:bg-[#E31B54] hover:text-white">
                    <ImageIcon className="w-4 h-4 mr-2" />
                    Change Cover
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Change Cover Image</DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleImageUpload} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="cover_image">Upload Image</Label>
                      <Input id="cover_image" name="cover_image" type="file" accept="image/*" />
                    </div>
                    <Button type="submit" className="w-full bg-[#E31B54] hover:bg-[#E31B54]/90 text-white">
                      Upload
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
        <div className="p-6 space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">About this event</h2>
            <p className="text-gray-600">{event.description}</p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-gray-600">
              <CalendarIcon className="w-5 h-5 text-[#E31B54]" />
              <span>
                {event.start_date} - {event.end_date}
              </span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <ClockIcon className="w-5 h-5 text-[#E31B54]" />
              <span>
                {event.start_time} - {event.end_time}
              </span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <MapPinIcon className="w-5 h-5 text-[#E31B54]" />
              <span>{event.location}</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <TicketIcon className="w-5 h-5 text-[#E31B54]" />
              <span>${event.ticket_price}</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <UsersIcon className="w-5 h-5 text-[#E31B54]" />
              <span>{event.ticket_quantity} tickets available</span>
            </div>
          </div>
          <div className="pt-6">
            <Button className="w-full bg-[#E31B54] hover:bg-[#E31B54]/90 text-white py-2 px-4 rounded">
              Buy Tickets
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

