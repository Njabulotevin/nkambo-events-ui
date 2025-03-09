import { apiClient } from "@/services/api"
import { Status } from "@/services/utils";
import { useFormik } from "formik"
import { useRouter } from "next/navigation";


function useCreateEvent() {
    const route = useRouter()
    const {values, handleSubmit, handleChange} = useFormik({
        initialValues: {
            name: "",
            description: "",
            start_date: "",
            end_date: "",
            start_time:"",
            end_time:"",
            ticket_price:"",
            ticket_quantity:"",
            location: ""
        },
        onSubmit: async(values)=>{
            const res = await apiClient.post("/event/create", values);

            if(Status.isOk(res.status)){
                route.push("/dashboard/")
            }
        }
    })
  return {values, handleChange, handleSubmit}
}

export default useCreateEvent