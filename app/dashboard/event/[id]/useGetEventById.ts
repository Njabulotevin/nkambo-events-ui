"use client"

import { apiFetcherClient } from "@/services/api";
import useSWR from "swr";
import { Event } from "@/models/events";


export function useEventById(id : string) {
    const {data, error, isLoading} = useSWR<Event>("/event/"+id, apiFetcherClient);
      return {data, error, isLoading}
}

