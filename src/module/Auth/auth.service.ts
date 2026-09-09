import { prisma } from "../../lib/prisma";
import { AppError } from "../../utils/AppError";
import { IRegisterPayload } from "./auth.interface";
import httpStatus from "http-status"
import bcrypt from "bcryptjs"
import config from "../../config";
import { UserRole } from "../../generated/prisma/enums";
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

    const hashPassword = await bcrypt.hash(password,Number(config.bcrypt_salt_rounds))

    const user = await prisma.user.create({
        data:{
            name,
            email,
            password:hashPassword,
            phone,
            role:UserRole.PATIENT
        }
    })
    return user

}