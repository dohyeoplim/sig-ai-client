import SummaryCard from "@/shared/components/SummaryCard";

export default function DemoCard({ className }: React.ComponentProps<"div">) {
    const labels = [
        "전월 대비 매출",
        "재방문 고객 비율",
        "남성 고객 비중",
        "배달 매출 비율",
        "평균 결제 금액",
        "매장 방문 수",
        "신규 고객 증가율",
        "고객 만족도 지수",
        "직원 근속률",
        "월별 성장률",
        "객단가 변화율",
        "재구매율",
        "신규 가입자 수",
        "리뷰 긍정률",
        "이탈 고객률",
    ];

    const label = labels[Math.floor(Math.random() * labels.length)];

    let value: string;
    if (label.includes("매출") || label.includes("금액")) {
        const amount = Math.floor(Math.random() * 2000) + 100;
        value = `${amount.toLocaleString()}만원`;
    } else if (
        label.includes("비율") ||
        label.includes("률") ||
        label.includes("지수") ||
        label.includes("성장")
    ) {
        value = `${(Math.random() * 100).toFixed(1)}%`;
    } else if (label.includes("수")) {
        value = `${Math.floor(Math.random() * 5000) + 50}명`;
    } else {
        value = `${(Math.random() * 100).toFixed(1)}`;
    }

    const delta = (Math.random() * 5 + 0.5).toFixed(1);

    const negativeIsGood =
        label.includes("이탈") ||
        label.includes("취소") ||
        label.includes("불만") ||
        label.includes("지연");

    const trend = negativeIsGood ? "down" : "up";

    return (
        <SummaryCard
            value={value}
            delta={`${delta}%`}
            trend={trend}
            label={label}
            animate={false}
            className={className}
        />
    );
}
