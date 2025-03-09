"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { useFormik } from "formik"
import { apiRedeemTicket } from '@/services/api';
import { Status } from "@/services/utils"
import { AxiosError } from "axios"
import { useParams } from "next/navigation"

export default function RedeemTicketPage() {

  const params = useParams<{eventId:string}>()
  const [message, setMessage] = useState("")

 const {values, handleChange, handleSubmit} = useFormik({
  initialValues:{ticket_number:""},
  onSubmit: async(values, actions)=>{
    try{
      const res = await apiRedeemTicket(values.ticket_number)
  
    
    if(Status.isOk(res.status)){
      setMessage("Ticket Redeemed Successfully")
    }else{
      setMessage(res.data?.data.message)
    }
    }catch(error){
      if (error instanceof AxiosError) {
        setMessage(error.response?.data?.message || "Failed to redeem ticket");
      } else {
        setMessage("An unexpected error occurred");
      }
      console.error(error);
    
    }
    actions.resetForm()
  }
 })

  return (
    <div className="min-h-screen flex p-4">
      <div className="w-full max-w-md space-y-8 bg-white rounded-lg border border-gray-100 p-6">
        <div>
          <h1 className="text-2xl font-bold mb-2">Redeem Ticket</h1>
          <p className="text-gray-600">Enter the ticket number to redeem</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="ticket_number">Ticket Number</Label>
            <Input
              id="ticket_number"
              value={values.ticket_number}
              onChange={(e)=>{
                handleChange(e)
                setMessage("")
              }}
              placeholder="Enter ticket number"
              required
              className="border-[#E31B54] focus-visible:ring-[#E31B54]"
            />
          </div>
          <Button disabled={message.length > 0} type="submit" className="w-full bg-[#E31B54] hover:bg-[#E31B54]/90 text-white">
            Redeem Now
          </Button>
        </form>
        {message && (
          <div className={`p-2 rounded-md border  ${message.includes("failed") ?  "border-500" : "border-500"}`}>
            <p className={`text-center ${message.includes("failed") ? "text-red-500" : "text-green-500"}`}>{message}</p>
          </div>
        )}
        <div className="text-center">
          <Link href={`/tickets/${params.eventId}`} className="text-[#E31B54] hover:underline">
            Back to Ticket List
          </Link>
        </div>
      </div>
    </div>
  )
}

