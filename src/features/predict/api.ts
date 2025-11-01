import { useMutation } from "@tanstack/react-query";
import { api } from "@/shared/lib/api";
import type { PredictReq } from "@/api";

export function usePredictClosureRisk() {
    return useMutation({
        mutationFn: (body: PredictReq) => api.predict(body),
    });
}
