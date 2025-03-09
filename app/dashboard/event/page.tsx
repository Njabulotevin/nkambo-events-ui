"use client";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useRouter } from "next/navigation";
import useEventList from "../useEventList";
import {Event} from "@/models/events";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { useFormik } from "formik";

export default function EventTable() {
  const route = useRouter();

  const { data, error, isLoading } = useEventList();

  const [events, setEvents] = useState<Event[]>(data as Event[]);



  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: { search: "" },
    onSubmit: (values) => {
   
      if (values.search) {
        const filteredEvents : Event[] = data?.filter((event) =>
          event.name.toLowerCase().includes(values.search.toLowerCase())
        ) as Event[];
        setEvents(filteredEvents);
      } else {
        setEvents(data as Event[]);
      }
    },
  });

  useEffect(() => {
    setEvents(data as Event[]);
  }, [data]);

  if (error) {
    return <div>Error</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen p-4 w-full">
      <div className="w-full space-y-8 p-6 bg-white border border-gray-200">
        {/* <div className="space-y-2">
            <h1 className="text-2xl font-bold tracking-tight text-center">Event List</h1>
            <p className="text-sm text-muted-foreground text-center">Manage your events</p>
          </div> */}

        <h1 className="text-3xl font-bold text-[#0A0B2E]">Event Management</h1>

        <div className="flex justify-between items-center">
          <form onSubmit={handleSubmit}>
            <Input
              onChange={handleChange}
              name="search"
              value={values.search}
              className="w-64"
              placeholder="Search Event..."
            />
           {values.search !== "" && <div className="p-2 text-sm">
              <p>Search result for <span className="text-[#E31B54]">{values.search}</span>...</p>
            </div>}
          </form>

          <Button
            onClick={() => route.push("/dashboard/event/create")}
            className="bg-[#E31B54] hover:bg-[#E31B54]/90 text-white"
          >
            Add New Event
          </Button>
        </div>

        <div className="overflow-x-auto">
          {events?.length == 0 ? (
            <div>You don&apos;t have any events!</div>
          ) : (
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
                {events?.map((event: Event) => (
                  <TableRow key={event._id}>
                    <TableCell className="font-medium">{event.name}</TableCell>
                    <TableCell className="w-[280px]">
                      {event.location}
                    </TableCell>
                    <TableCell className="w-[100px]">
                      {event.start_date}
                    </TableCell>
                    <TableCell>{event.start_time}</TableCell>
                    <TableCell>R{event.ticket_price}</TableCell>
                    <TableCell>{event.ticket_quantity}</TableCell>
                    <TableCell className="text-right">
                      <Button
                        variant="outline"
                        className="mr-2 border-[#E31B54] text-[#E31B54] hover:bg-[#E31B54] hover:text-white"
                        onClick={() =>
                          route.push("/dashboard/event/" + event._id)
                        }
                      >
                        View
                      </Button>
                    </TableCell>

                    <TableCell className="text-right">
                      <Button
                        variant="outline"
                        className="mr-2 border-[#E31B54] text-[#E31B54] hover:bg-[#E31B54] hover:text-white"
                        onClick={() =>
                          route.push("/dashboard/tickets/" + event._id)
                        }
                      >
                        Tickets
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </div>
      </div>
    </div>
  );
}
