"use client"

import useSWR from "swr";
import { apiFetcherClient } from "@/services/api";
import {Event} from "@/models/events"


function useEventList() {
const {data, error, isLoading} = useSWR<Event[]>("/event", apiFetcherClient);
  return {data, error, isLoading}
}

export default useEventList


  