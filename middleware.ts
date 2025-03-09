import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import { Status } from "./services/utils";

export async function middleware(request: NextRequest) {
    if (request.nextUrl.pathname.startsWith("/dashboard")) {
        const adminCookie = request.cookies.get("admin");

        if (!adminCookie) {
            return redirectToLogin(request);
        }

       try{
        const server_url = process.env.SERVER_URL || "http://localhost:8080";
        const token = adminCookie?.value;
        const res = await axios.post(server_url+"/admin/validate/token", {token: token});
        
     
        if(!Status.isOk(res.status)){
            return redirectToLogin(request);
        }
       }catch(e){
        console.log(e)
        return redirectToLogin(request)
       }

    }

    return NextResponse.next(); 
}


function redirectToLogin(request: NextRequest){
    return NextResponse.redirect(new URL("/login", request.url));
}
