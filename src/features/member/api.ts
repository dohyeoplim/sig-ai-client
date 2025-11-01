import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "@/shared/lib/api";
import type { MemberReq } from "@/api";
import { memberKeys } from "./keys";

export function useMember(memberId: number) {
    return useQuery({
        queryKey: memberKeys.byId(memberId),
        queryFn: () => api.get1(memberId),
        enabled: Number.isFinite(memberId),
    });
}

export function useMemberByPhone(phoneNumber: string) {
    return useQuery({
        queryKey: memberKeys.byPhone(phoneNumber),
        queryFn: () => api.getByPhoneNumber(phoneNumber),
        enabled: !!phoneNumber,
    });
}

export function useCreateMember() {
    const qc = useQueryClient();
    return useMutation({
        mutationFn: (body: MemberReq) => api.create1(body),
        onSuccess: () => qc.invalidateQueries({ queryKey: memberKeys.all }),
    });
}

export function useUpdateMember(memberId: number) {
    const qc = useQueryClient();
    return useMutation({
        mutationFn: (body: MemberReq) => api.update1(memberId, body),
        onSuccess: () => {
            qc.invalidateQueries({ queryKey: memberKeys.byId(memberId) });
            qc.invalidateQueries({ queryKey: memberKeys.all });
        },
    });
}

export function useDeleteMember(memberId: number) {
    const qc = useQueryClient();
    return useMutation({
        mutationFn: () => api.delete1(memberId),
        onSuccess: () => qc.invalidateQueries({ queryKey: memberKeys.all }),
    });
}
