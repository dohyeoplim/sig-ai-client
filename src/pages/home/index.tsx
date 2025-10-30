import SummaryCard from "@/shared/components/SummaryCard";

export default function HomePage() {
    return (
        <div className="w-full grid grid-cols-2 gap-2">
            <SummaryCard />
            <SummaryCard />
            <SummaryCard />
            <SummaryCard />
        </div>
    );
}
