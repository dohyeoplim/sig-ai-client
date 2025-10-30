import SummaryCard from "@/shared/components/SummaryCard";
import RainbowInlineChart from "@/shared/components/InlineCharts/Rainbow";
import BannerWithIcon from "@/shared/components/BannerWithIcon";

export default function HomePage() {
    return (
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
                    value="1203만원"
                    delta="1.3%"
                    trend="down"
                    label="전월 대비 매출"
                />

                <SummaryCard value="2.7%" label="상권 고정 비용 상승률" />
            </div>
        </div>
    );
}
