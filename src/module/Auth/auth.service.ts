import { prisma } from "../../lib/prisma";
import { IRegisterPayload } from "./auth.interface";

const registrationUser= async (payload:IRegisterPayload)=>{
    const {name,email,password,phone}=payload

    const existingUser = await prisma.user.findUnique({
        where:{
            email
        }
    })
    if (existingUser){
        thr
    }
}