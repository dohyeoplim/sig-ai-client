import { QueryClient, type DefaultOptions } from "@tanstack/react-query";

const defaultOptions: DefaultOptions = {
    queries: {
        staleTime: 30_000,
        gcTime: 10 * 60 * 1000,
        refetchOnWindowFocus: false,
        retry: (failureCount, _) => failureCount < 2,
        networkMode: "online",
    },
    mutations: {
        retry: 0,
        networkMode: "online",
    },
};

export function createQueryClient() {
    return new QueryClient({ defaultOptions });
}
