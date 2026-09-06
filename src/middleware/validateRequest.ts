import type { NextFunction, Request, Response } from "express";
import type { ZodObject } from "zod";

export const validateRequest = (schema: ZodObject) => {
  return (req: Request, _res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);

    if (!result.success) {
      return next(result.error);
    }

    req.body = result.data;

    next();
  };
};