import { useQuery } from "@tanstack/react-query";
import type { MarketAnalysisResponseModel } from "@/shared/api/models/MarketAnalysisResponseModel";
import { fetcher } from "../client";

type useAnalysisDataParams = {
    quarter: string;
    storeId: number;
    count: number;
    useMock?: boolean;
};

export const useAnalysisData = ({
    quarter,
    storeId,
    count,
    useMock = false,
}: useAnalysisDataParams) =>
    useQuery({
        queryKey: ["analysis"],
        queryFn: async (): Promise<MarketAnalysisResponseModel> => {
            if (useMock) {
                const res = await fetch(
                    `${import.meta.env.BASE_URL}mock/analysis_response.json`
                );
                if (!res.ok) throw new Error("Failed to load file");
                return (await res.json()) as MarketAnalysisResponseModel;
            }

            const res = await fetcher<MarketAnalysisResponseModel>(
                "/analysis",
                {
                    method: "POST",
                    body: JSON.stringify({ storeId, quarter, count }),
                }
            );
            return res;
        },
    });
