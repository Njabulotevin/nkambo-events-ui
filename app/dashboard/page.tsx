"use client"

import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useRouter } from "next/navigation"
import useEventList from "./useEventList";



export default function EventTable() {

    const route = useRouter();

    const {data, error, isLoading} = useEventList();

  if(error){
    return <div>Error</div>
  }

  if(isLoading){
    return <div
  }
}

