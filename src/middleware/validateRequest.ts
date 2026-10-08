import type { NextFunction, Request, Response } from "express";
import type { ZodObject } from "zod";

export const validateRequest = (schema: ZodObject) => {
  return (req: Request, _res: Response, next: NextFunction) => {
    const wrapped = schema.safeParse({
      body: req.body,
      query: req.query,
      params: req.params,
    });

    if (wrapped.success) {
      if (
        wrapped.data &&
        typeof wrapped.data === "object" &&
        "body" in wrapped.data
      ) {
        req.body = (wrapped.data as { body: unknown }).body;
      }
      return next();
    }

    const raw = schema.safeParse(req.body);

    if (raw.success) {
      req.body = raw.data;
      return next();
    }

    return next(wrapped.error);
  };
};