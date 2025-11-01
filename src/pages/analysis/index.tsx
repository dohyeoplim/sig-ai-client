import { useState } from "react";
import { useSession } from "@/shared/lib/session";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import ActionSheet from "@/shared/components/ActionSheet";
import StoreInfoForm from "./components/StoreInfoForm";
import BannerWithIcon from "@/shared/components/BannerWithIcon";
import SummaryCard from "@/shared/components/SummaryCard";
import RainbowInlineChart from "@/shared/components/InlineCharts/Rainbow";
import VanillaTextSelect from "@/shared/components/FormComponents/NonFormik/VanillaTextSelect";
import { generateQuarterOptions } from "@/shared/utils/generateQuarterOptions";
import { RefreshCcw, Wallet } from "lucide-react";
import { useStoresByOwnerPhone } from "@/features/store/api";
import RevenueForm from "./components/RevenueForm";
import { useRevenues } from "@/features/revenue/api";
import ExpandableCard from "@/shared/components/ExpandableCard";
import useRedrawKeys from "@/shared/components/Charts/useRedrawKeys";
import { AreaChart } from "@/shared/components/Charts";
import type { StoreRevenue } from "@/features/revenue/types";

export default function AnalysisPage() {
    const { isAuthenticated, user } = useSession();
    const location = useLocation();

    if (!isAuthenticated || !user) {
        return <Navigate to="/" replace state={{ from: location }} />;
    }

    const navigate = useNavigate();

    const [showRevenueSheet, setShowRevenueSheet] = useState(false);
    const [showStoreSheet, setStoreShowSheet] = useState(false);
    const [redraw, bump] = useRedrawKeys(["revenue", "closed"] as const);

    const onCloseSheet = () => {
        setShowRevenueSheet(false);
        setStoreShowSheet(false);
    };

    const quarterOptions = generateQuarterOptions(2023, 2025);
    const [quarter, setQuarter] = useState("202504");

    const store = useStoresByOwnerPhone(user.phoneNumber);
    const revenue = useRevenues(store.data?.data?.[0]?.id);

    return (
        <div className="relative">
            <div className="w-full grid grid-cols-1 gap-2">
                <BannerWithIcon
                    title="핵심 고객 변화"
                    description="30대 고객 방문 비중이 하락하고 있습니다!"
                    label="위험 신호"
                    buttonLabel="AI 추천 솔루션"
                />

                <hr className="border-[0.5px] border-grey-100 my-2" />

                <div className="w-full flex items-center justify-between">
                    <VanillaTextSelect
                        options={quarterOptions}
                        value={quarter}
                        onChange={(v) => setQuarter(v.target.value)}
                        className="h-11"
                    />

                    <div className="flex items-center gap-1">
                        <button
                            className="card-designed size-11 grid place-items-center rounded-full cursor-pointer scale-95 hover:scale-100 active:scale-80 text-grey-800 hover:text-grey-900 transition-all"
                            onClick={() => setShowRevenueSheet(true)}
                        >
                            <Wallet size={18} />
                        </button>
                        <button
                            className="card-designed size-11 grid place-items-center rounded-full cursor-pointer scale-95 hover:scale-100 active:scale-80 text-grey-800 hover:text-grey-900 transition-all"
                            onClick={() => {
                                navigate(0);
                            }}
                        >
                            <RefreshCcw size={16} />
                        </button>
                    </div>
                </div>

                <SummaryCard
                    value="안전"
                    label="위험 수준 분석"
                    visual={<RainbowInlineChart value={0.2} />}
                />

                <div className="w-full grid grid-cols-2 gap-2">
                    <SummaryCard
                        value="1203만원"
                        delta="1.3%"
                        trend="down"
                        label="전월 대비 매출"
                        animateDelay={0.5}
                    />

                    <SummaryCard
                        value="1203만원"
                        delta="1.3%"
                        trend="down"
                        label="전월 대비 매출"
                        animateDelay={0.5}
                    />
                </div>

                {!revenue.error && (
                    <ExpandableCard
                        cardDescription={`상권 매출 그래프 ${
                            revenue.isPending || revenue.isFetching
                                ? "(로딩 중)"
                                : ""
                        }`}
                        isExpandable
                        defaultExpanded
                        onExpandedChange={(expanded) =>
                            expanded && bump("revenue")
                        }
                    >
                        {revenue.data && (
                            <AreaChart<StoreRevenue>
                                redrawKey={redraw.revenue}
                                data={revenue.data.data?.revenues}
                                dataKey={{
                                    x: "month",
                                    y: ["monthlyRevenue"],
                                }}
                            />
                        )}
                    </ExpandableCard>
                )}

                <div className="w-full grid place-items-center">
                    <button
                        className="p-3 font-caption02 text-grey-800 cursor-pointer"
                        onClick={() => setStoreShowSheet(true)}
                    >
                        매장 정보 수정
                    </button>
                </div>
            </div>

            <ActionSheet
                title={store.data?.data?.[0]?.storeName ?? "가게 정보"}
                isOpen={showStoreSheet}
                onClose={onCloseSheet}
                disableDrag
            >
                <StoreInfoForm
                    afterSubmit={onCloseSheet}
                    phoneNumber={user.phoneNumber}
                    store={store.data?.data?.[0]}
                />
            </ActionSheet>

            <ActionSheet
                title="매출 정보 입력"
                isOpen={showRevenueSheet}
                onClose={onCloseSheet}
                disableDrag
            >
                <RevenueForm
                    afterSubmit={onCloseSheet}
                    storeId={store.data?.data?.[0]?.id}
                />
            </ActionSheet>
        </div>
    );
}
