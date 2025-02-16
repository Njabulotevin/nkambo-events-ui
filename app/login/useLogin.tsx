'use client'

import { useFormik } from "formik";
import { apiClient } from "../services/api";

function useLogin() {
  const { values, handleSubmit, handleChange } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    onSubmit: async (values) => {
      const res = await apiClient.post("/admin/login", values);

      console.log(res);

    },
  });
  return { values, handleSubmit, handleChange };
}

export default useLogin;
