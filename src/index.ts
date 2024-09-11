import "./pre-run";

import Express from "express";

export const app = Express();

/** Parse the request */
app.use(Express.urlencoded({ extended: false }));

/** Takes care of JSON data */
app.use(Express.json());

/**
 * OPEN API schema validator
 */
import { OpenApiConfig, OpenApiError } from "@/helpers/openapi";
app.use(OpenApiConfig);
app.use(OpenApiError);

/**
 * Routes Specifications
 */
import router from "@/routes/route";
app.use(router);

/**
 * Server Start
 */
const PORT = process.env.PORT || 3000;
export const server = app.listen(PORT, async () => {
    console.log(`The server is running on ::${PORT}`);
});
