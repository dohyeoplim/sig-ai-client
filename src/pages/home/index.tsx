import { useState } from "react";
import ActionSheet from "@/shared/components/ActionSheet";
import StoreInfoForm from "./components/StoreInfoForm";
import BannerWithIcon from "@/shared/components/BannerWithIcon";
import SummaryCard from "@/shared/components/SummaryCard";
import RainbowInlineChart from "@/shared/components/InlineCharts/Rainbow";
// import ExpandableCard from "@/shared/components/ExpandableCard";
// import { AreaChart } from "@/shared/components/Charts";
// import useRedrawKeys from "@/shared/components/Charts/useRedrawKeys";
// import { useAnalysisData } from "@/api/queries/useAnalysisData";

export default function HomePage() {
    const [showSheet, setShowSheet] = useState(false);
    // const [redraw, bump] = useRedrawKeys(["revenue", "closed"] as const);

    const onCloseSheet = () => {
        setShowSheet(false);
    };

    // const { isPending, error, data, isFetching } = useAnalysisData({
    //     quarter: "827004",
    //     storeId: 1,
    //     count: 3,
    //     useMock: true,
    // });

    return (
        <div className="relative">
            <div className="w-full grid grid-cols-1 gap-2">
                <BannerWithIcon
                    title="핵심 고객 변화"
                    description="30대 고객 방문 비중이 하락하고 있습니다!"
                    label="위험 신호"
                    buttonLabel="AI 추천 솔루션"
                />
                <SummaryCard
                    value="안전"
                    label="위험 수준 분석"
                    visual={<RainbowInlineChart value={0.2} />}
                />
                <div className="w-full grid grid-cols-2 gap-2">
                    <SummaryCard
                        value="맛닭꼬끼오 공릉점"
                        label="탭해서 업데이트"
                        animateDelay={0.5}
                        className="cursor-pointer hover:bg-key-50 transition-colors"
                        onClick={() => setShowSheet(true)}
                    />

                    <SummaryCard
                        value="1203만원"
                        delta="1.3%"
                        trend="down"
                        label="전월 대비 매출"
                        animateDelay={0.5}
                    />
                </div>
                {/* {!error && (
                    <ExpandableCard
                        cardDescription={`상권 매출 그래프 ${
                            isPending || isFetching ? "(로딩 중)" : ""
                        }`}
                        isExpandable
                        defaultExpanded
                        onExpandedChange={(expanded) =>
                            expanded && bump("revenue")
                        }
                    >
                        {data && (
                            <AreaChart<QuarterlyRevenueRank>
                                redrawKey={redraw.revenue}
                                data={
                                    data.data.revenueComparison
                                        .quarterlyRevenueRanks
                                }
                                dataKey={{
                                    x: "quarter",
                                    y: ["revenue"],
                                }}
                            />
                        )}
                    </ExpandableCard>
                )}

                {!error && (
                    <ExpandableCard
                        cardDescription={`상권 내 폐업 가게 수 ${
                            isPending || isFetching ? "(로딩 중)" : ""
                        }`}
                        isExpandable
                        onExpandedChange={(expanded) =>
                            expanded && bump("closed")
                        }
                    >
                        {data && (
                            <AreaChart<QuarterlyClosedRate>
                                redrawKey={redraw.closed}
                                data={
                                    data.data.closedComparison
                                        .quarterlyClosedRates
                                }
                                dataKey={{
                                    x: "quarter",
                                    y: ["closedStoreCount"],
                                }}
                            />
                        )}
                    </ExpandableCard>
                )} */}
            </div>

            <ActionSheet
                title="맛닭꼬끼오 공릉점"
                isOpen={showSheet}
                onClose={onCloseSheet}
                disableDrag
            >
                <StoreInfoForm afterSubmit={onCloseSheet} />
            </ActionSheet>
        </div>
    );
}
