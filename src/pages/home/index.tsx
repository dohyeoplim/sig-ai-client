import { useState } from "react";
import ExpandableCard from "@/shared/components/ExpandableCard";
import { AreaChart } from "@/shared/components/Charts";

export default function HomePage() {
    const [animate, setAnimate] = useState(0);

    return (
        <div className="flex flex-col gap-6">
            <ExpandableCard
                cardTitle="김경보 님, 오늘도 잘하고 계시네요!"
                cardDescription="지난달보다 재방문 고객 비율이 증가하고 있습니다."
                isExpandable
                defaultExpanded
                onExpandedChange={() => {
                    setAnimate((k) => k + 1);
                }}
            >
                <AreaChart redrawKey={animate} />
            </ExpandableCard>

            {/* <Card
                cardTitle="김경보 님, 오늘도 잘하고 계시네요!"
                cardDescription="지난달보다 재방문 고객 비율이 증가하고 있습니다."
                cardTheme="red"
            />

            <Card
                cardTitle="김경보 님, 오늘도 잘하고 계시네요!"
                cardDescription="지난달보다 재방문 고객 비율이 증가하고 있습니다."
                cardTheme="grey"
            /> */}
        </div>
    );
}
