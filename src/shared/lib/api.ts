import { ApiClient, type OpenAPIConfig } from "@/api";

const config: OpenAPIConfig = {
    BASE: "/api",
    WITH_CREDENTIALS: false,
    CREDENTIALS: "omit",
    VERSION: "1",
};

const client = new ApiClient(config);

export const api = client.api;
