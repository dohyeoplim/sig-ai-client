import SummaryCard from "@/shared/components/SummaryCard";

export default function Small() {
    const labels = [
        "전월 대비 매출",
        "재방문 고객 비율",
        "남성 고객 비중",
        "배달 매출 비율",
        "평균 결제 금액",
        "매장 방문 수",
        "신규 고객 증가율",
        "고객 만족도 지수",
    ];

    const label = labels[Math.floor(Math.random() * labels.length)];
    const revenue = Math.floor(Math.random() * 2000) + 100; // 100~2100
    const delta = (Math.random() * 5).toFixed(1); // 0.0~5.0
    const trend = Math.random() > 0.5 ? "up" : "down";

    return (
        <div className="flex items-center gap-2">
            <SummaryCard
                value={`${revenue.toLocaleString()}만원`}
                delta={`${delta}%`}
                trend={trend as "up" | "down"}
                label={label}
                animate={false}
                className="w-80"
            />
        </div>
    );
}
