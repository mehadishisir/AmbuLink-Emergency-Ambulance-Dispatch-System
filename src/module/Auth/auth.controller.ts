import { catchAsync } from "../../utils/catchAsync";
import httpStatus from "http-status";
import type { Request, Response } from "express";
import { AuthService } from "./auth.service";
import { sendResponse } from "../../utils/sendResponse";

const registerUser = catchAsync (async ( req : Request, res : Response)=>{
    const result = await AuthService.registrationUser(req.body);
   console.log(result)
    sendResponse(res,{
        success:true,
        statusCode: httpStatus.CREATED,
        message:"User registered successfully",
        data:result
    })
})

export const AuthController = {
    registerUser
}