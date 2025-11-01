import { useMutation } from "@tanstack/react-query";
import { api } from "@/shared/lib/api";

export function usePredictClosureRisk() {
    return useMutation({
        mutationFn: (payload: Record<string, unknown>) => api.predict(payload),
    });
}
