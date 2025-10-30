import type { SummaryCardProps } from "./types";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function SummaryCard({
    value,
    delta,
    trend,
    label,
    visual,
    className,
}: SummaryCardProps) {
    return (
        <div
            className={`w-full flex flex-col justify-between p-4 rounded-[20px] bg-light-surface ${
                visual ? "h-26" : "h-21"
            } ${className}`}
        >
            <div className="w-full flex items-center justify-between">
                <span className="font-body01 text-grey-900">{value}</span>
                {delta && trend && (
                    <div
                        className={`flex items-center gap-0.5 ${
                            trend == "down"
                                ? "text-safe-blue"
                                : "text-danger-red"
                        }`}
                    >
                        {trend == "down" ? (
                            <ChevronDown size={12} strokeWidth={2} />
                        ) : (
                            <ChevronUp size={12} strokeWidth={2} />
                        )}
                        <span className="font-caption01">{delta}</span>
                    </div>
                )}
            </div>

            <div className="flex flex-col gap-3">
                {visual}
                <span className="font-caption02 text-grey-700">{label}</span>
            </div>
        </div>
    );
}
