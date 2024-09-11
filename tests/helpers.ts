import supertest from "supertest";
import { afterAll } from "@jest/globals";

import { server } from "../src/index";

export const API_URL = `http://localhost:${process.env.PORT ?? 6060}`;
export const TIMEOUT_BUSYWAIT = 10000;

export const superagent = supertest.agent(server);

export function close_handles() {
    server?.close();
}

afterAll(async () => {
    close_handles();
});

export async function sleep(time: number) {
    return await new Promise((r) => setTimeout(r, time));
}
