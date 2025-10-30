import { ChevronDown } from "lucide-react";

export default function SummaryCard() {
    return (
        <div className="w-full flex flex-col justify-between h-20 p-4 rounded-[20px] bg-light-surface">
            <div className="w-full flex items-center justify-between">
                <span className="font-body01 text-grey-900">28%</span>

                <div className="flex items-center gap-0.5 text-red-400">
                    <ChevronDown size={12} strokeWidth={2} />
                    <span className="font-caption02">1.3%</span>
                </div>
            </div>

            <div className="flex flex-col gap-2">
                {/* <div>Graph</div> */}
                <span className="font-caption02 text-grey-700">
                    작년 대비 매출
                </span>
            </div>
        </div>
    );
}
