"use client"

import { apiFetcherClient } from "@/app/services/api";
import useSWR from "swr";
import { Event } from "@/app/models/events";


export function useEventById(id : string) {
    const {data, error, isLoading} = useSWR<Event>("/event/"+id, apiFetcherClient);
      return {data, error, isLoading}
}

