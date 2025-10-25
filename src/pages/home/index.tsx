import Card from "@/shared/components/Card";
import { LineChart } from "@/shared/components/Charts";
import { useState } from "react";

export default function HomePage() {
    const [animate, setAnimate] = useState(0);

    return (
        <div className="flex flex-col gap-6 pt-6">
            <Card
                cardTitle="김경보 님, 오늘도 잘하고 계시네요!"
                cardDescription={
                    <span className="font-caption02">
                        지난달보다{" "}
                        <span className="text-key-primary">
                            재방문 고객 비율
                        </span>
                        이 증가하고 있습니다.
                    </span>
                }
                cardTheme="green"
                isExpandable
                defaultExpanded={false}
            >
                <div className="text-sm text-gray-700">
                    <p>Children</p>
                </div>
            </Card>

            <Card
                cardTitle="김경보 님, 오늘도 잘하고 계시네요!"
                cardDescription="지난달보다 재방문 고객 비율이 증가하고 있습니다."
                isExpandable
                defaultExpanded
                onExpandedChange={() => {
                    setAnimate((k) => k + 1);
                }}
            >
                <LineChart redrawKey={animate} />
            </Card>

            <Card
                cardTitle="김경보 님, 오늘도 잘하고 계시네요!"
                cardDescription="지난달보다 재방문 고객 비율이 증가하고 있습니다."
                cardTheme="orange"
            />

            <Card
                cardTitle="김경보 님, 오늘도 잘하고 계시네요!"
                cardDescription="지난달보다 재방문 고객 비율이 증가하고 있습니다."
                cardTheme="red"
            />

            <Card
                cardTitle="김경보 님, 오늘도 잘하고 계시네요!"
                cardDescription="지난달보다 재방문 고객 비율이 증가하고 있습니다."
                cardTheme="grey"
            />
        </div>
    );
}
