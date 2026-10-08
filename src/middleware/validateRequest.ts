import type { NextFunction, Request, Response } from "express";
import type { ZodObject } from "zod";

export const validateRequest = (schema: ZodObject) => {
  return (req: Request, _res: Response, next: NextFunction) => {
    const result = schema.safeParse({
      body: req.body,
      query: req.query,
      params: req.params,
    });

    if (!result.success) {
      return next(result.error);
    }

    if (result.data && typeof result.data === "object" && "body" in result.data) {
      req.body = (result.data as { body: unknown }).body;
    }

    next();
  };
};