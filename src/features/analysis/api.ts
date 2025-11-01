import { useMutation } from "@tanstack/react-query";
import { api } from "@/shared/lib/api";
import type { MarketAnalysisReq } from "@/api";

export function useAnalyzeMarket() {
    return useMutation({
        mutationFn: (body: MarketAnalysisReq) => api.analysis(body),
    });
}
