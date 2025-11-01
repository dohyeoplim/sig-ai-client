export interface QuarterlyRevenueRank {
    quarter: string;
    revenue: number;
    topPercentile: number;
    totalStoreCount: number;
    rank: number;
    rankChange: number | null;
}

export interface RevenueComparison {
    quarterlyRevenueRanks: QuarterlyRevenueRank[];
    competitionIntensity: number;
}

export interface PopulationComparison {
    available: boolean;
}

export interface QuarterlyClosedRate {
    quarter: string;
    closedRate: number;
    closedStoreCount: number;
    totalStoreCount: number;
    rateChange: number | null;
}

export interface ClosedComparison {
    quarterlyClosedRates: QuarterlyClosedRate[];
    averageClosedRate: number;
    trend: string;
}

export interface AnalysisData {
    storeId: number;
    storeName: string;
    analyzedAt: string;
    revenueComparison: RevenueComparison;
    populationComparison: PopulationComparison;
    closedComparison: ClosedComparison;
}

export interface AnalysisResponseModel {
    status: string;
    message: string;
    data: AnalysisData;
}
