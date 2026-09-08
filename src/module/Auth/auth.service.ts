import { prisma } from "../../lib/prisma";
import { AppError } from "../../utils/AppError";
import { IRegisterPayload } from "./auth.interface";
import httpStatus from "http-status"
const registrationUser= async (payload:IRegisterPayload)=>{
    const {name,email,password,phone}=payload

    const existingUser = await prisma.user.findUnique({
        where:{
            email
        }
    })
    if (existingUser){
        throw new AppError(httpStatus.CONFLICT, "User already exists with this email")
    }
}