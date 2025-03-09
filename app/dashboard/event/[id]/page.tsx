"use client";

import { Button } from "@/components/ui/button";
import {
  CalendarIcon,
  ClockIcon,
  ImageIcon,
  MapPinIcon,
  TicketIcon,
  UsersIcon,
} from "lucide-react";
import { useEventById } from "./useGetEventById";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { apiClient } from "@/services/api";
import { Status } from "@/services/utils";

export default function EventDetails() {
  const router = useRouter();

  const params = useParams<{id:string}>()

  const { data} = useEventById(params.id);

  const [coverImage, setCoverImage] = useState(data?.cover_url);

  const [isPending, setIsPending] = useState(false)

  const handleImageUpload = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const file = formData.get("cover_image") as File;

    setIsPending(true)
    const res = await apiClient.post("/event/cover/upload/" + params.id, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    
    if(Status.isOk(res.status)){

    }

    setIsPending(false)
    window.location.reload()

    if (file) {
      console.log(coverImage)

      const imageUrl = URL.createObjectURL(file);
      setCoverImage(imageUrl);
    }
  };

  return (
    <div className="min-h-screen p-4">
      <div className="w-full max-w-4xl space-y-8 bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="relative h-64 sm:h-80 md:h-96">
          <img
            src={data?.cover_url || "/placeholder.svg"}
            alt={data?.name}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end">
            <div className="p-6 flex justify-between items-end w-full">
              <div>
                <h1 className="text-3xl font-bold text-white mb-2">
                  {data?.name}
                </h1>
                <p className="text-white text-opacity-80">{data?.start_date}</p>
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    className="bg-white text-[#E31B54] hover:bg-[#E31B54] hover:text-white"
                  >
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
                      <Input
                        id="cover_image"
                        name="cover_image"
                        type="file"
                        accept="image/*"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-[#E31B54] hover:bg-[#E31B54]/90 text-white"
                    >
                      {isPending?"Loading...":"Upload"}
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
            <p className="text-gray-600">{data?.description}</p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-gray-600">
              <CalendarIcon className="w-5 h-5 text-[#E31B54]" />
              <span>
                {data?.start_date} - {data?.end_date}
              </span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <ClockIcon className="w-5 h-5 text-[#E31B54]" />
              <span>
                {data?.start_time} - {data?.end_time}
              </span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <MapPinIcon className="w-5 h-5 text-[#E31B54]" />
              <span>{data?.location}</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <TicketIcon className="w-5 h-5 text-[#E31B54]" />
              <span>${data?.ticket_price}</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <UsersIcon className="w-5 h-5 text-[#E31B54]" />
              <span>{data?.ticket_quantity} tickets available</span>
            </div>
          </div>
          <div className="pt-6">
            <Button
              onClick={() => router.push("/dashboard/tickets/" + data?._id)}
              className="w-full bg-[#E31B54] hover:bg-[#E31B54]/90 text-white py-2 px-4 rounded"
            >
              View Tickets
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
