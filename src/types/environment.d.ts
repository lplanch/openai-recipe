/**
 * Extends NodeJS's ProcessEnv interface to include custom environment variables used in the application.
 *
 * @global
 * @namespace NodeJS - Extends the existing NodeJS namespace.
 * @interface ProcessEnv - Extends the existing ProcessEnv interface of NodeJS.
 *
 * @property {'development' | 'production' | 'testing'} NODE_ENV - Defines the environment in which the application is running.
 * @property {string} PORT - Optional. The port number on which the server will listen.
 * @property {string} API_KEY_OPENAI - The API key used to request OpenAI API
 */
declare global {
    namespace NodeJS {
        interface ProcessEnv {
            /** NODE ENV */
            NODE_ENV: "development" | "production" | "testing";
            PORT?: string;

            /** OPENAI ENV */
            API_KEY_OPENAI?: string;
        }
    }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
