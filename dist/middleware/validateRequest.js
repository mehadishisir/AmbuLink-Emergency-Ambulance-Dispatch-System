"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRequest = void 0;
const validateRequest = (schema) => {
    return (req, _res, next) => {
        const wrapped = schema.safeParse({
            body: req.body,
            query: req.query,
            params: req.params,
        });
        if (wrapped.success) {
            if (wrapped.data &&
                typeof wrapped.data === "object" &&
                "body" in wrapped.data) {
                req.body = wrapped.data.body;
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
exports.validateRequest = validateRequest;
//# sourceMappingURL=validateRequest.js.map