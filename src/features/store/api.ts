import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "@/shared/lib/api";
import type { StoreReq } from "@/api";
import { storeKeys } from "./keys";

export function useStore(storeId: number) {
    return useQuery({
        queryKey: storeKeys.byId(storeId),
        queryFn: () => api.get(storeId),
        enabled: Number.isFinite(storeId),
    });
}

export function useCreateStore(phoneNumber: string) {
    const qc = useQueryClient();
    return useMutation({
        mutationFn: (body: StoreReq) => api.create(phoneNumber, body),
        onSuccess: () => qc.invalidateQueries({ queryKey: storeKeys.all }),
    });
}

export function useUpdateStore(phonenumber: string, storeId: number) {
    const qc = useQueryClient();
    return useMutation({
        mutationFn: (body: StoreReq) => api.update(phonenumber, storeId, body),
        onSuccess: () => {
            qc.invalidateQueries({ queryKey: storeKeys.byId(storeId) });
            qc.invalidateQueries({ queryKey: storeKeys.all });
        },
    });
}

export function useDeleteStore(phoneNumber: string, storeId: number) {
    const qc = useQueryClient();
    return useMutation({
        mutationFn: () => api.delete(phoneNumber, storeId),
        onSuccess: () => qc.invalidateQueries({ queryKey: storeKeys.all }),
    });
}

export function useStoresByOwnerPhone(phoneNumber: string) {
    return useQuery({
        queryKey: storeKeys.byOwnerPhone(phoneNumber),
        queryFn: () => api.getStoresByPhoneNumber(phoneNumber),
        enabled: !!phoneNumber,
    });
}
