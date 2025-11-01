import { ApiClient, type OpenAPIConfig } from "@/api";

const config: OpenAPIConfig = {
    BASE: import.meta.env.VITE_API_URL || "/api",
    WITH_CREDENTIALS: false,
    CREDENTIALS: "omit",
    VERSION: "1",
};

const client = new ApiClient(config);

export const api = client.api;
