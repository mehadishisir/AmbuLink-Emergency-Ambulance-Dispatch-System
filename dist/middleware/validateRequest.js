"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRequest = void 0;
const validateRequest = (schema) => {
    return (req, _res, next) => {
        const result = schema.safeParse(req.body);
        if (!result.success) {
            return next(result.error);
        }
        req.body = result.data;
        next();
    };
};
exports.validateRequest = validateRequest;
//# sourceMappingURL=validateRequest.js.map