import RainbowInlineChart from "@/shared/components/InlineCharts/Rainbow";
import SummaryCard from "@/shared/components/SummaryCard";

export default function HomePage() {
    return (
        <div className="w-full grid grid-cols-2 gap-2">
            <SummaryCard
                value="안전"
                label="위험 수준 분석"
                visual={<RainbowInlineChart value={0.2} />}
            />
        </div>
    );
}
