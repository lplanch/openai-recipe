import { NextFunction, Request, Response } from "express";
import * as OpenApiValidator from "express-openapi-validator";
import { InternalServerError } from "express-openapi-validator/dist/framework/types";

export const OpenApiConfig = OpenApiValidator.middleware({
    apiSpec: "./docs/openapi-merged.yaml",
    validateRequests: true,
    validateResponses: true,
});

export const OpenApiError = (
    err: InternalServerError,
    _req: Request,
    res: Response,
    _next: NextFunction
) => {
    res.status(err.status || 500).json({
        message: err.message,
        errors: err.errors,
    });
};
