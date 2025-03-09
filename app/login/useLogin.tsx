'use client'

import { useFormik } from "formik";
import { apiClient } from "../../services/api";
import { Status } from "../../services/utils";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {setCookie} from "cookies-next/client"

function useLogin() {
  const route = useRouter()
  const [isPending, setIsPending] = useState(false);

  const [error, setError] = useState("")

  const { values, handleSubmit, handleChange } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    onSubmit: async (values) => {
      try{
        setIsPending(true)
      const res = await apiClient.post("/admin/login", values);

      if(Status.isOk(res.status)){
        setIsPending(false)
        
        setCookie("admin", res.data.data?.token)

        route.push("/")
      }
      }catch(e){
        console.log(e)
        setIsPending(false)
        setError("Invalid email or password")
        setIsPending(false)
      }
      setIsPending(false)
      
    },
  });
  return { values, handleSubmit, handleChange, isPending, error, setError };
}

export default useLogin;
