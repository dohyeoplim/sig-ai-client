import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "@/shared/lib/api";
import type { StoreRevenueReq } from "@/api";
import { revenueKeys } from "./keys";

export function useRevenues(storeId: number) {
    return useQuery({
        queryKey: revenueKeys.byStore(storeId),
        queryFn: () => api.getRevenuesByStoreId(storeId),
        enabled: Number.isFinite(storeId),
    });
}

export function useCreateRevenue(storeIdForRefetch?: number) {
    const qc = useQueryClient();
    return useMutation({
        mutationFn: (body: StoreRevenueReq) => api.createRevenue(body),
        onSuccess: () => {
            if (Number.isFinite(storeIdForRefetch)) {
                qc.invalidateQueries({
                    queryKey: revenueKeys.byStore(storeIdForRefetch as number),
                });
            }
        },
    });
}
