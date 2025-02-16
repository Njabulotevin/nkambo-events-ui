'use client'

import { useFormik } from "formik";
import { apiClient } from "../services/api";
import { Status } from "../services/utils";
import { useRouter } from "next/navigation";
import { useState } from "react";

function useLogin() {
  const route = useRouter()
  const [isPending, setIsPending] = useState(false);

  const { values, handleSubmit, handleChange } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    onSubmit: async (values) => {
      setIsPending(true)
      const res = await apiClient.post("/admin/login", values);

      if(Status.isOk(res.status)){
        setIsPending(false)
        console.log("Was succesful!")
        route.push("/dashboard")
        
      }
      setIsPending(false)
    },
  });
  return { values, handleSubmit, handleChange, isPending };
}

export default useLogin;
